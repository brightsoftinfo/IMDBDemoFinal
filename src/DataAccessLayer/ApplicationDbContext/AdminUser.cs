using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Domain.Entities
{
    public partial class AdminUser
    {
        public AdminUser()
        {
            RefreshToken = new HashSet<RefreshToken>();
            TblMovies = new HashSet<TblMovies>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedDdate { get; set; }

        public virtual ICollection<RefreshToken> RefreshToken { get; set; }
        public virtual ICollection<TblMovies> TblMovies { get; set; }
    }
}
