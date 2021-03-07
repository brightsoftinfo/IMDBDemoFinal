import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            LoginRoutingModule
        ],
        exports: [LoginComponent]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map