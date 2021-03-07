using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Domain.Entities
{
    public partial class TblRating
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? MovieId { get; set; }
        public int? Rating { get; set; }
        public DateTime RatingDate { get; set; }
        public bool? IsActive { get; set; }

        public virtual TblMovies Movie { get; set; }
        public virtual TblUserMaster User { get; set; }
    }
}
