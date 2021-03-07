import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    NgModule({
        declarations: [LoginComponent, RegisterComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            AuthRoutingModule
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map