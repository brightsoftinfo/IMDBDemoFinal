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
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}/api/Movies/GetMovie`, options);
  }

  getMovieId(movieId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}`, options);
  }

  addMovie(movie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post(`${environment.apiUrl}/​api​/Movies`, movie, options);
  }

  updateMovie(movie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.put(`${environment.apiUrl}/​api​/Movies`, movie, options);
  }

  removeMovie(movieId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.delete(`${environment.apiUrl}/api/Movies/DeleteMovie?ID=${movieId}`, options);
  }
}
