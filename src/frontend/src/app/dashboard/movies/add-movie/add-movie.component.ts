import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm: FormGroup
  submitted = false
  @ViewChild('fileInput') el: ElementRef;

  constructor(
      public fb: FormBuilder,
      public movieService: MovieService) { }

  ngOnInit(): void {
       this.createMovieForm()
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

  addMovie() {
    this.submitted = true
    if(this.movieForm.invalid) return
    const formData = new FormData();
    formData.append("ID", '0')
    formData.append("MovieName", this.movieForm.value['MovieName'])
    formData.append("Poster", this.movieForm.value['Poster'])
    formData.append("Description", this.movieForm.value['Description'])
    formData.append("MovieYear", this.movieForm.value['MovieYear'])
    formData.append("Directors", this.movieForm.value['Directors'])
    formData.append("ReleaseDate", this.movieForm.value['ReleaseDate'])
    
    this.movieService.addMovie(formData).subscribe((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })
  }

  get getMovieForm() {
    return this.movieForm.controls 
  }

}
