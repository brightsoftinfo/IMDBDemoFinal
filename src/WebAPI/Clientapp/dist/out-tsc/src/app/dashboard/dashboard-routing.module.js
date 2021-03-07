import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
const routes = [
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
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DashboardRoutingModule);
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map