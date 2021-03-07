import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [HomeComponent, RatingComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
