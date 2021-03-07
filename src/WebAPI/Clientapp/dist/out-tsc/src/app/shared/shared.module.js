import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [PagenotfoundComponent],
        imports: [
            CommonModule,
            RouterModule
        ],
        exports: [PagenotfoundComponent]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map