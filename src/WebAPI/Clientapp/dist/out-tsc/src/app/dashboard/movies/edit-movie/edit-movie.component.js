import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
let EditMovieComponent = class EditMovieComponent {
    constructor(fb, movieService, activeRoute) {
        this.fb = fb;
        this.movieService = movieService;
        this.activeRoute = activeRoute;
        this.submitted = false;
    }
    ngOnInit() {
        this.createMovieForm();
        this.getMovieById(this.activeRoute.snapshot.params.id);
    }
    getMovieById(id) {
        this.movieService.getMovieId(id).subscribe((res) => {
            if (res) {
                console.log(res['id']);
                this.movieForm.setValue({
                    MovieName: res['movieName'],
                    Poster: res['poster'],
                    Description: res['description'],
                    MovieYear: res['movieYear'],
                    Directors: res['directors'],
                    ReleaseDate: res['releaseDate'].split('T')[0]
                });
                // this.movieForm.patchValue(res)
            }
        }, (err) => {
            console.log(err);
        });
    }
    uploadFile(event) {
        if (event.target.files && event.target.files[0]) {
            this.movieForm.patchValue({
                Poster: event.target.files[0]
            });
        }
    }
    createMovieForm() {
        this.movieForm = this.fb.group({
            MovieName: ['', Validators.required],
            Poster: [null],
            Description: ['', Validators.required],
            MovieYear: ['', Validators.required],
            Directors: ['', Validators.required],
            ReleaseDate: ['', Validators.required]
        });
    }
    editMovie() {
        this.submitted = true;
        if (this.movieForm.invalid)
            return;
        const formData = new FormData();
        formData.append("ID", this.activeRoute.snapshot.params.id);
        formData.append("MovieName", this.movieForm.value['MovieName']);
        formData.append("Poster", this.movieForm.value['Poster']);
        formData.append("Description", this.movieForm.value['Description']);
        formData.append("MovieYear", this.movieForm.value['MovieYear']);
        formData.append("Directors", this.movieForm.value['Directors']);
        formData.append("ReleaseDate", this.movieForm.value['ReleaseDate']);
        this.movieService.updateMovie(formData).subscribe((res) => {
            console.log(res);
            if (res) {
                alert(`${res['message']}`);
            }
        }, (err) => {
            console.log(err);
        });
    }
    get getMovieForm() {
        return this.movieForm.controls;
    }
};
__decorate([
    ViewChild('fileInput')
], EditMovieComponent.prototype, "el", void 0);
EditMovieComponent = __decorate([
    Component({
        selector: 'app-edit-movie',
        templateUrl: './edit-movie.component.html',
        styleUrls: ['./edit-movie.component.scss']
    })
], EditMovieComponent);
export { EditMovieComponent };
//# sourceMappingURL=edit-movie.component.js.map