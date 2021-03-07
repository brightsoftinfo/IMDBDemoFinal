using Services.Models.User;
using System.Threading.Tasks;

namespace Services.RepositoryPattern.User
{
   public interface IUserService
    {
        void Register(RegistrationRequest model, string origin);
        Task<ClientLoginResponse> ClientLogin(ClientLoginModel model, string IpAddress);
        ClientLoginResponse ClientRefreshToken(string token, string ipAddress);
        void ClientRevokeToken(string token, string ipAddress);
        AdminLoginResponse AdminLogin(AdminLoginModel model);

    }
}
