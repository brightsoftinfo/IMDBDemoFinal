import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.addClass(this.document.body, 'theme-red');
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'theme-red');
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    }),
    __param(0, Inject(DOCUMENT))
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map