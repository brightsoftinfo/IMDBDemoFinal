using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Domain.Entities
{
    public partial class TblMovies
    {
        public TblMovies()
        {
            TblRating = new HashSet<TblRating>();
        }

        public int Id { get; set; }
        public string MovieName { get; set; }
        public string Poster { get; set; }
        public string Description { get; set; }
        public int? MovieYear { get; set; }
        public string Directors { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public bool? IsActive { get; set; }
        public DateTime CreationDate { get; set; }
        public int? CreatedBy { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual AdminUser CreatedByNavigation { get; set; }
        public virtual ICollection<TblRating> TblRating { get; set; }
    }
}
