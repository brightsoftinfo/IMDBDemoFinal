import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MovieListComponent = class MovieListComponent {
    constructor(movieServ, route) {
        this.movieServ = movieServ;
        this.route = route;
        this.allMovies = [];
    }
    ngOnInit() {
        this.getAllMovie();
    }
    navigateToEdit(id) {
        console.log(id);
        this.route.navigate(['dashboard/edit/', id]);
    }
    getAllMovie() {
        this.movieServ.getMovies().subscribe((res) => {
            this.allMovies = [];
            this.allMovies = res;
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    deleteMovie(id) {
        this.movieServ.removeMovie(id).subscribe((res) => {
            // if(res) {
            alert(`${res}`);
            this.getAllMovie();
            // }
        }, (err) => {
            console.log(err);
        });
    }
};
MovieListComponent = __decorate([
    Component({
        selector: 'app-movie-list',
        templateUrl: './movie-list.component.html',
        styleUrls: ['./movie-list.component.scss']
    })
], MovieListComponent);
export { MovieListComponent };
//# sourceMappingURL=movie-list.component.js.map