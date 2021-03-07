using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.User
{
    public class RegistrationRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
