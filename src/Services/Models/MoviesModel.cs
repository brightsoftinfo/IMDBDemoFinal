using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
   public class MoviesModel
    {
        [JsonProperty(PropertyName = "ID")]
        public int ID { get; set; }
        
        [JsonProperty(PropertyName = "MovieName")]
        public string MovieName { get; set; }

        [JsonProperty(PropertyName = "Poster")]
        public IFormFile Poster { get; set; }
        [JsonProperty(PropertyName = "PosterFile")]
        public string PosterFile { get; set; }

        [JsonProperty(PropertyName = "Description")]

        public string Description { get; set; }

        [JsonProperty(PropertyName = "MovieYear")]

        public int MovieYear { get; set; }

        [JsonProperty(PropertyName = "Directors")]

        public string Directors { get; set; }

        [JsonProperty(PropertyName = "ReleaseDate")]

        public DateTime ReleaseDate { get; set; }
        [JsonProperty(PropertyName = "avgRate")]
        public decimal avgRate { get; set; }


    }
    public class RatingDetail
    {
        public int RatingNo { get; set; }
        public int Ratings { get; set; }
    }
   
}
