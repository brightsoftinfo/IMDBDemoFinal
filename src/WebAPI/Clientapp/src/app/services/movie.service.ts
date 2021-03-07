import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}/api/Movies/GetMovie`, options);
  }

  getMovieRate(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}/api/Movies/GetRating/${id}`, options);
  }

  getRatingDetail(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}/api/Movies/GetRatingDetails/${id}`, options);
  }

  getMovieId(movieId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}/api/Movies/GetMovieByID/${movieId}`, options);
  }

  addMovie(movie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post('https://localhost:44393/api/Movies', movie);
  }

  updateMovie(movie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.put('https://localhost:44393/api/Movies', movie, options);
  }

  removeMovie(movieId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.delete(`${environment.apiUrl}/api/Movies/DeleteMovie/${movieId}`, options);
  }

  addRating({Id,Rating}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post(`${environment.apiUrl}/api/Movies/AddRating/${Id}/${Rating}`, {},options);
  }
}
