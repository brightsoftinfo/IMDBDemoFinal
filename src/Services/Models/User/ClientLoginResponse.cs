using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.User
{
    public class ClientLoginResponse
    {
        public string message { get; set; }
        public bool status { get; set; }
        public string token { get; set; }
        public string RefreshToken { get; set; }
    }
    public class AdminLoginResponse
    {
        public string message { get; set; }
        public bool status { get; set; }
    }
}
