import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movie.service';

import { Movies } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  allMovies: Movies 
  
  constructor(public movieServ: MovieService) { }

  ngOnInit(): void {
    this.getAllMovie()
  }

  getAllMovie() {
      this.movieServ.getMovies().subscribe((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
  }

}
