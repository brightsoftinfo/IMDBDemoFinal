import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from 'src/app/services/movie.service';

import { Movies } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  allMovies: any = []
  
  constructor(public movieServ: MovieService, public route: Router) { }

  ngOnInit(): void {
    this.getAllMovie()
  }

  navigateToEdit(id) {
    console.log(id)
    this.route.navigate(['dashboard/edit/',id])
  }

  getAllMovie() {
      this.movieServ.getMovies().subscribe((res) => {
        this.allMovies = []
        this.allMovies = res
        console.log(res)
      }, (err) => {
        console.log(err)
      })
  }

  deleteMovie(id) {
    this.movieServ.removeMovie(id).subscribe((res) => {
      // if(res) {
        alert(`${res}`)
        this.getAllMovie()
      // }
    }, (err) => {
      console.log(err)
    })
  }

}
