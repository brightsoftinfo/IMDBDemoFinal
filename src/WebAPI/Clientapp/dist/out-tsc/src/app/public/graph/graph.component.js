import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GraphComponent = class GraphComponent {
    constructor(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.type = 'BarChart';
        this.columnNames2 = ['Year', 'Sales'];
        this.options = {};
        this.myData = [
            ['1', 0],
            ['2', 0],
            ['3', 0],
            ['4', 0],
            ['5', 0],
            ['6', 0],
            ['7', 0],
            ['8', 0],
            ['9', 0],
            ['10', 0]
        ];
    }
    ngOnInit() {
        this.movieService.getRatingDetail(this.activatedRoute.snapshot.params.id).subscribe((res) => {
            console.log(res);
            if (res) {
                let dataSet = [];
                dataSet = res;
                dataSet.forEach((ele, index) => {
                    const oneReview = dataSet.find((ele) => ele.ratingNo == index + 1);
                    this.myData[index][1] = oneReview['ratings'];
                });
                console.log(this.myData);
            }
        }, (err) => {
            console.log(err);
        });
    }
};
GraphComponent = __decorate([
    Component({
        selector: 'app-graph',
        templateUrl: './graph.component.html',
        styleUrls: ['./graph.component.scss']
    })
], GraphComponent);
export { GraphComponent };
//# sourceMappingURL=graph.component.js.map