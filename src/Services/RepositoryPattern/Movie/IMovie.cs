using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer.Common.Settings;
using DataAccessLayer.Models;
using Domain.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Services.RepositoryPattern.Movie
{
    public interface IMovie
    {
        Task<List<MoviesModel>> GetMovies();
        Task<string> AddSync(MoviesModel movies);
        Task<TblMovies> GetMovieByID(int ID);
        Task<string> UpdateSync(MoviesModel movies);
        Task<string> RemoveSync(int ID);
        Task<string> Activate(int ID);
        Task<string> AddRating(int ID, int Rating);
        decimal GetRating(int ID);
        Task<List<RatingDetail>> GetRatingDetails(int ID);

    }
    public class Movie : IMovie
    {
        private readonly IMDBDemoDbContext _db;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public Movie(IMDBDemoDbContext db, IHostingEnvironment environment, IHttpContextAccessor httpContextAccessor)
        {
            _db = db;
            _hostingEnvironment = environment;
            _httpContextAccessor = httpContextAccessor;
        }
        

        public async Task<string> AddSync(MoviesModel movies)
        {
            try
            {
                var MovieExist = _db.TblMovies.Where(c => c.MovieName.Equals(movies.MovieName)).Any();
                
                if (MovieExist is false)
                {
                    // file path code
                    var folderName = AppConstant.PosterPath;
                    string webRootPath = _hostingEnvironment.ContentRootPath;
                    string newPath = Path.Combine(webRootPath, folderName);
                    if (!Directory.Exists(newPath))
                    {
                        Directory.CreateDirectory(newPath);
                    }
                    var fileExe = Path.GetExtension(ContentDispositionHeaderValue.Parse(movies.Poster.ContentDisposition).FileName.Trim('"'));
                    string fileName = string.Concat($@"{Guid.NewGuid()}", fileExe);
                    string fullPath = Path.Combine(newPath, fileName);

                    TblMovies res = new TblMovies();

                   res.MovieName = movies.MovieName;
                    if (movies.Poster.Length > 0) 
                    { 
                        res.Poster = fileName;
                    }
                   res.Description = movies.Description;
                   res.MovieYear = movies.MovieYear;
                   res.Directors = movies.Directors;
                   res.ReleaseDate = DateTime.UtcNow;
                   res.CreatedBy = 1;
                   res.IsActive = true;
                   res.CreationDate = DateTime.UtcNow;
                   res.ModifiedBy = null;
                   res.ModifiedDate = DateTime.UtcNow;
                    
                    _db.TblMovies.Add(res);
                   _db.SaveChanges();
                    // upload file
                    if (movies.Poster.Length > 0)
                    {
                        string PathofPoster = Path.Combine("https://", _httpContextAccessor.HttpContext.Request.Host.Value, folderName, fileName);
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            movies.Poster.CopyTo(stream);
                        }
                    }
                    return "Movie Created Success";
                }
                else return "Movie already exists";
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }
        public async Task<TblMovies> GetMovieByID(int ID)
        {
            try
            {
                return await _db.TblMovies.FindAsync(ID);
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<List<MoviesModel>> GetMovies()
        {
            try
            {
                var Movies = await _db.TblMovies.Select(k => new MoviesModel {
                    MovieName = k.MovieName,
                    ID=k.Id,
                    avgRate=0,
                    Description= k.Description,
                    Directors = k.Directors,
                    MovieYear = k.MovieYear.Value,
                    PosterFile= k.Poster,
                    ReleaseDate=k.ReleaseDate.Value
                }).ToListAsync();
                foreach (var j in Movies)
                {
                    j.avgRate = GetRating(j.ID);
                }
                return Movies;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
       
        public async Task<string> Activate(int ID)
        {
            try
            {
                var j = await _db.TblMovies.Where(k => k.Id == ID).FirstAsync();
                j.IsActive = j.IsActive is true ? false : true;
                await _db.SaveChangesAsync();
                return "Movie "+(j.IsActive is true ? "Activated":"Deactivated") +" Successfully";
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<string> RemoveSync(int ID)
        {
            try
            {
                var j = await _db.TblMovies.Where(k => k.Id == ID).FirstAsync();
                _db.TblMovies.Remove(j);
                await _db.SaveChangesAsync();
                return "Movie Removed Successfully";
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<string> UpdateSync(MoviesModel movies)
        {
            try
            {
                // file path code
                var folderName = AppConstant.PosterPath;
                string webRootPath = _hostingEnvironment.ContentRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                var fileExe = Path.GetExtension(ContentDispositionHeaderValue.Parse(movies.Poster.ContentDisposition).FileName.Trim('"'));
                string fileName = string.Concat($@"{Guid.NewGuid()}", fileExe);
                string fullPath = Path.Combine(newPath, fileName);

                var j = _db.TblMovies.Where(k => k.Id == movies.ID).First();
                j.MovieName = movies.MovieName;
                if (movies.Poster.Length > 0) 
                { 
                    j.Poster = fileName;
                }
                j.Description = movies.Description;
                j.MovieYear = movies.MovieYear;
                j.Directors = movies.Directors;
                j.ReleaseDate = movies.ReleaseDate;
                j.ModifiedBy = 1;
                j.ModifiedDate = DateTime.UtcNow;
                 _db.SaveChanges();
                if (movies.Poster.Length > 0)
                {
                    
                    string PathofPoster = Path.Combine("https://", _httpContextAccessor.HttpContext.Request.Host.Value, folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        movies.Poster.CopyTo(stream);
                    }
                }
                return "Movie Updated Successfully!";
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<string> AddRating(int ID, int Rating)
        {
            try
            {
                TblRating tbl = new TblRating
                {
                    MovieId = ID,
                    Rating = Rating,
                    IsActive = true,
                    UserId = 1,
                    RatingDate = DateTime.UtcNow
                };
                _db.TblRating.Add(tbl);
                await _db.SaveChangesAsync();
                return "Rating Added Successfully!";
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public  decimal GetRating(int ID)
        {
            var rating = _db.TblRating.Where(k => k.MovieId == ID).ToList();
            int[] r = new int[10];
            int count = 1;
            for(int i=0; i<10 ; i++)
            {
                r[i] = rating.Where(k => k.Rating == count && k.IsActive.Value).Count();
                count++;
            }
            decimal avg=0;int c=1;
            foreach(var tr in r)
            {
                avg += c * tr;
                c++;
            }
            decimal weighted = avg<=0?0:avg / r.Sum();
            return Math.Round(weighted,1,MidpointRounding.AwayFromZero);
        }
      
        public async Task<List<RatingDetail>> GetRatingDetails(int ID)
        {
            var rating = await _db.TblRating.Where(k => k.MovieId == ID).ToListAsync();
            int[] r = new int[10];
            int count = 1;
            for (int i = 0; i < 10; i++)
            {
                r[i] = rating.Where(k => k.Rating == count && k.IsActive.Value).Count();
                count++;
            }
            int cnt = 1;
            List<RatingDetail> rdk = new List<RatingDetail>();
            foreach(var j in r)
            {
                RatingDetail rds = new RatingDetail
                {
                    RatingNo = cnt,
                    Ratings = j
                };
                cnt++;
                rdk.Add(rds);
            }
            return rdk;
        }

        
    }
}
