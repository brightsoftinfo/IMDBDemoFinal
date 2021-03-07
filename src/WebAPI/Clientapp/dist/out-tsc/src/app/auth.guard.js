import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(_authServices, _router) {
        this._authServices = _authServices;
        this._router = _router;
    }
    canActivate() {
        if (this._authServices.isLoggedin()) {
            return true;
        }
        else {
            this._router.navigate(['']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable()
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map