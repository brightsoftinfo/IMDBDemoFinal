import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
    }
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
    getMovieId(movieId) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers };
        return this.http.get(`${environment.apiUrl}/api/Movies/GetMovieByID/${movieId}`, options);
    }
    addMovie(movie) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers };
        return this.http.post('https://localhost:44393/api/Movies', movie);
    }
    updateMovie(movie) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers };
        return this.http.put('https://localhost:44393/api/Movies', movie, options);
    }
    removeMovie(movieId) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers };
        return this.http.delete(`${environment.apiUrl}/api/Movies/DeleteMovie/${movieId}`, options);
    }
    addRating({ Id, Rating }) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers: headers };
        return this.http.post(`${environment.apiUrl}/api/Movies/AddRating/${Id}/${Rating}`, {}, options);
    }
};
MovieService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MovieService);
export { MovieService };
//# sourceMappingURL=movie.service.js.map