using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Models.User;
using Services.RepositoryPattern.User;
using System;
using System.Threading.Tasks;
using WebAPI.Authorizations;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        #region Client Register
        [HttpPost("register")]
        public IActionResult Register(RegistrationRequest model)
        {
            _userService.Register(model, Request.Headers["origin"]);
            return Ok(new
            {
                message = "Registration successful",
                status = true
            });
        }
        #endregion

        #region Client Login
        [HttpPost("login")]
        public async Task<IActionResult> Login(ClientLoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var response = await _userService.ClientLogin(model, ipAddress());
            setTokenCookie(response.RefreshToken);
            return Ok(new
            {
                message = "Login Successfully",
                status = true,
                Token = response.token,
                refereshToken = response.RefreshToken
            });
        }
        #endregion

        #region Referesh token
        [HttpPost("refresh-token")]
      
        public IActionResult RefreshToken()
        {
            var refreshToken = Request.Cookies["ClientrefreshToken"];
            var response = _userService.ClientRefreshToken(refreshToken, ipAddress());

            if (response == null)
                return Unauthorized(new { message = "Invalid token" });

            setTokenCookie(response.RefreshToken);

            return Ok(new
            {
                message = "Successfully",
                status = true,
                Token = response.token,
                refereshToken = response.RefreshToken
            });
        }
        #endregion

        #region RevokeToken
        [Authorize]
        [HttpPost("revoke-token")]
        public IActionResult RevokeToken(RevokeTokenRequest model)
        {
            var token = model.Token ?? Request.Cookies["ClientrefreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            _userService.ClientRevokeToken(token, ipAddress());
            return Ok(new { message = "Token revoked" });
        }
        #endregion

        private string ipAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
                return Request.Headers["X-Forwarded-For"];
            else
                return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
        }

        #region Set token cookie
        private void setTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddHours(2)
            };
            Response.Cookies.Append("ClientrefreshToken", token, cookieOptions);
        }
        #endregion
        #region admin Login
        [HttpPost("AdminLogin")]
        public AdminLoginResponse AdminLogin(AdminLoginModel model)
        {
            return _userService.AdminLogin(model);
        }
        #endregion
    }
}
