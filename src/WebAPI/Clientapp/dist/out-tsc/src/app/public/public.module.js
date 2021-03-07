import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GraphComponent } from './graph/graph.component';
let PublicModule = class PublicModule {
};
PublicModule = __decorate([
    NgModule({
        declarations: [HomeComponent, RatingComponent, GraphComponent],
        imports: [
            CommonModule,
            PublicRoutingModule,
            ReactiveFormsModule,
            GoogleChartsModule
        ],
        exports: [HomeComponent, RatingComponent, GraphComponent]
    })
], PublicModule);
export { PublicModule };
//# sourceMappingURL=public.module.js.map