import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'graph/:id', component: GraphComponent },
    { path: 'rating/:m_id', component: RatingComponent }
];
let PublicRoutingModule = class PublicRoutingModule {
};
PublicRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PublicRoutingModule);
export { PublicRoutingModule };
//# sourceMappingURL=public-routing.module.js.map