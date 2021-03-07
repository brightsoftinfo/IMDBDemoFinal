import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movieForm: FormGroup
  submitted = false
  @ViewChild('fileInput') el: ElementRef;

  constructor(
      public fb: FormBuilder,
      public movieService: MovieService,
      public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createMovieForm()
    this.getMovieById(this.activeRoute.snapshot.params.id)
  }

  getMovieById(id: any) {
      this.movieService.getMovieId(id).subscribe((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
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
    })
  }

  editMovie() {
    this.submitted = true
    if(this.movieForm.invalid) return
    const formData = new FormData();
    formData.append("ID", this.activeRoute.snapshot.params.id)
    formData.append("MovieName", this.movieForm.value['MovieName'])
    formData.append("Poster", this.movieForm.value['Poster'])
    formData.append("Description", this.movieForm.value['Description'])
    formData.append("MovieYear", this.movieForm.value['MovieYear'])
    formData.append("Directors", this.movieForm.value['Directors'])
    formData.append("ReleaseDate", this.movieForm.value['ReleaseDate'])
    
    this.movieService.updateMovie(formData).subscribe((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })
  }

  get getMovieForm() {
    return this.movieForm.controls 
  }

}
