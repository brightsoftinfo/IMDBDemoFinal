import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
let AddMovieComponent = class AddMovieComponent {
    constructor(fb, movieService) {
        this.fb = fb;
        this.movieService = movieService;
        this.submitted = false;
    }
    ngOnInit() {
        this.createMovieForm();
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
    addMovie() {
        this.submitted = true;
        if (this.movieForm.invalid)
            return;
        console.log(this.movieForm.value['Poster']);
        const formData = new FormData();
        formData.append("ID", '0');
        formData.append("MovieName", this.movieForm.value['MovieName']);
        formData.append("Poster", this.movieForm.value['Poster']);
        formData.append("Description", this.movieForm.value['Description']);
        formData.append("MovieYear", this.movieForm.value['MovieYear']);
        formData.append("Directors", this.movieForm.value['Directors']);
        formData.append("ReleaseDate", this.movieForm.value['ReleaseDate']);
        this.movieService.addMovie(formData).subscribe((res) => {
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
], AddMovieComponent.prototype, "el", void 0);
AddMovieComponent = __decorate([
    Component({
        selector: 'app-add-movie',
        templateUrl: './add-movie.component.html',
        styleUrls: ['./add-movie.component.scss']
    })
], AddMovieComponent);
export { AddMovieComponent };
//# sourceMappingURL=add-movie.component.js.map