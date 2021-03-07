import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { TopavbarComponent } from './topnavbar/topavbar.component';
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        declarations: [SidenavbarComponent, TopavbarComponent],
        imports: [
            CommonModule,
            RouterModule
        ],
        exports: [SidenavbarComponent, TopavbarComponent]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map