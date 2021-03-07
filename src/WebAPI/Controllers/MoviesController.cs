using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Services.RepositoryPattern.Movie;
using Domain.Entities;
using DataAccessLayer.Models;
using WebAPI.Authorizations;

namespace WebAPI.Controllers
{
  
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : BaseController
    {
        private readonly IMovie _Movies;
        public MoviesController(IMovie m)
        {
            _Movies = m;
        }
        [HttpGet("GetMovie")]
        public Task<List<MoviesModel>> GetMovies()
        {

            return _Movies.GetMovies();
            //return View();
        }
        
        [HttpPost]
        public IActionResult Add([FromForm] MoviesModel m)
        {
            _Movies.AddSync(m);
            return Ok(new
            {
                Message = "Movie Added",
                Status = true
            });
        }
        [HttpGet("GetMovieByID/{ID}")]
        public Task<TblMovies> GetMovieByID(int ID)
        {
            return _Movies.GetMovieByID(ID);
        }
        [HttpPut]
        public IActionResult Update([FromForm] MoviesModel m)
        {
            _Movies.UpdateSync(m);

            return Ok(new
            {
                Message = "Movie Updated",
                Status = true
            });
        }
        [HttpDelete("DeleteMovie/{ID}")]
        public Task<string> Remove(int ID)
        {
            return _Movies.RemoveSync(ID);
        }

        [HttpPost("ActiveMovie/{ID}")]
        public Task<string> Activate(int ID)
        {
            return _Movies.Activate(ID);
        }

        [HttpPost("AddRating/{ID}/{Rating}")]
        [Authorize]
        public Task<string> AddRating(int ID, int Rating)
        {
            return _Movies.AddRating(ID, Rating);
        }

        [HttpGet("GetRatingDetails/{ID}")]
        public Task<List<RatingDetail>> GetRatingDetails(int ID)
        {
            return _Movies.GetRatingDetails(ID);
        }

    }
}
