import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      { path: 'list', component: MovieListComponent },
      { path: 'add', component: AddMovieComponent },
      { path: 'edit/:id', component: EditMovieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
