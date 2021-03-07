using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DataAccessLayer.Common.Helper
{
    public class LoginAccount
    {
        [JsonPropertyName("userid")]
        public string userid { get; set; }

        [JsonPropertyName("username")]
        public string username { get; set; }
    }
}
