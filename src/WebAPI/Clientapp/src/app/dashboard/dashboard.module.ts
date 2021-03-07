import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

@NgModule({
  declarations: [DashboardComponent, AddMovieComponent, MovieListComponent, EditMovieComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports: [DashboardComponent, AddMovieComponent, MovieListComponent, EditMovieComponent]
})
export class DashboardModule { }
