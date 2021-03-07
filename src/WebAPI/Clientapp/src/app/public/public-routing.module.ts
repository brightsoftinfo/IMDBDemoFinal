import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';

import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'graph/:id', component: GraphComponent},
  {path: 'rating/:m_id', component: RatingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
