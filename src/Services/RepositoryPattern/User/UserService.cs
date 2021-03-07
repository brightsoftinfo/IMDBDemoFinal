
using DataAccessLayer.Common.Exceptions;
using DataAccessLayer.Common.Helper;
using DataAccessLayer.Common.Settings;
using Domain.Entities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Services.Models.User;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Services.RepositoryPattern.User
{
    public class UserService : IUserService
    {
        private readonly IMDBDemoDbContext _context;
        public UserService(IMDBDemoDbContext context)
        {
            _context = context;
        }


        public async Task<ClientLoginResponse> ClientLogin(ClientLoginModel model, string IpAddress)
        {
            var account = _context.TblUserMaster.SingleOrDefault(x => x.Username.ToLower() == model.UserName.ToLower());

            if (account == null || !(model.Password.ToLower() == account.Password.ToLower()))
                throw new AppException("Email or password is incorrect");

            if (!account.IsActive.GetValueOrDefault()) throw new AppException("Please active your account");

            var claims = new LoginAccount
            {
                userid = account.Id.ToString(),
                username = account.Username,
            };
            var token = GenerateTokens(claims, DateTime.UtcNow);
            var refreshToken = generateClientRefreshToken(IpAddress);

            // save refresh token
            account.UserRefreshToken.Add(refreshToken);

            // remove old refresh tokens from account
            removeOldClientRefreshTokens(account);

            _context.Update(account);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var result = ex;
                //Ignore
            }

            var response = new ClientLoginResponse();
            response.token = token;
            response.RefreshToken = refreshToken.Token;
            return response;
        }

        public ClientLoginResponse ClientRefreshToken(string token, string ipAddress)
        {
            var (refreshToken, account) = getClientRefreshToken(token);

            // replace old refresh token with a new one and save
            var newRefreshToken = generateClientRefreshToken(ipAddress);
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            account.UserRefreshToken.Add(newRefreshToken);

            removeOldClientRefreshTokens(account);

            _context.Update(account);
            _context.SaveChanges();

            // generate new jwt
            var claims = new LoginAccount
            {
                userid = account.Id.ToString(),
                username = account.Username,
            };

            var jwtToken = GenerateTokens(claims, DateTime.UtcNow);


            var response = new ClientLoginResponse();
            response.token = jwtToken;
            response.RefreshToken = refreshToken.Token;
            return response;
        }

        public void ClientRevokeToken(string token, string ipAddress)
        {
            var (refreshToken, account) = getClientRefreshToken(token);

            // revoke token and save
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            _context.Update(account);
        }

        public void Register(RegistrationRequest model, string origin)
        {
            if (model == null) throw new AppException("Invalid model");

            // validate
            if (_context.TblUserMaster.Any(x => x.Username == model.UserName))
                throw new AppException($"Username '{model.UserName}' is already registered");

            TblUserMaster user = new TblUserMaster();
            user.Username = model.UserName;
            user.Password = model.Password;
            user.IsActive = true;
            user.CreatedDate = DateTime.Now;

            // save account
            _context.TblUserMaster.Add(user);
            _context.SaveChanges();
        }


        private void removeOldClientRefreshTokens(TblUserMaster account)
        {
            var adminToken = account.UserRefreshToken.ToList();
            adminToken.RemoveAll(x =>
                !x.IsActive &&
                x.Created.AddHours(2) <= DateTime.UtcNow);
        }

        #region Token
        public string GenerateTokens(LoginAccount claims, DateTime now)
        {
            var unixTimeSeconds = new DateTimeOffset(now).ToUnixTimeSeconds();

            var claimData = new Claim[] {
                   new Claim(JwtRegisteredClaimNames.Iat, unixTimeSeconds.ToString(), ClaimValueTypes.Integer64),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(nameof(claims.userid), claims.userid),
                    new Claim(nameof(claims.username), claims.username)
               };

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("9ST5hQe5dUNfAJOQZAtt19uiDhNtKKUt");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claimData),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        #endregion

        private (UserRefreshToken, TblUserMaster) getClientRefreshToken(string token)
        {
            var account = _context.TblUserMaster.SingleOrDefault(u => u.UserRefreshToken.Any(t => t.Token == token));
            if (account == null) throw new AppException("Invalid token");
            var refreshToken = _context.UserRefreshToken.SingleOrDefault(x => x.Token == token);
            bool IsExpired = DateTime.UtcNow >= refreshToken.Expires;
            bool IsActive = (refreshToken.Revoked == null && !IsExpired);
            if (!IsActive) throw new AppException("Invalid token");
            return (refreshToken, account);
        }

        #region Client Refresh Token
        private UserRefreshToken generateClientRefreshToken(string ipAddress)
        {
            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var randomBytes = new byte[64];
                rngCryptoServiceProvider.GetBytes(randomBytes);
                return new UserRefreshToken
                {
                    Token = Convert.ToBase64String(randomBytes),
                    Expires = DateTime.UtcNow.AddHours(2),
                    Created = DateTime.UtcNow,
                    CreatedByIp = ipAddress,
                    IsActive = true
                };
            }
        }


        #endregion
        public AdminLoginResponse AdminLogin(AdminLoginModel model)
        {
            var account = _context.AdminUser.SingleOrDefault(x => x.UserName.ToLower() == model.UserName.ToLower());

            if (account == null || !(model.Password == account.Password))
                return new AdminLoginResponse { message = "Username or password is incorrect", status = false };
            else
                return new AdminLoginResponse {message="Login Success",status=true };
        }
    }
}
