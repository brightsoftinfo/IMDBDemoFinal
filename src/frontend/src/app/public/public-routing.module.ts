import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rating', component: RatingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
