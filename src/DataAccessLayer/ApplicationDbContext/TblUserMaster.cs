using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Domain.Entities
{
    public partial class TblUserMaster
    {
        public TblUserMaster()
        {
            TblRating = new HashSet<TblRating>();
            UserRefreshToken = new HashSet<UserRefreshToken>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool? IsActive { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual ICollection<TblRating> TblRating { get; set; }
        public virtual ICollection<UserRefreshToken> UserRefreshToken { get; set; }
    }
}
