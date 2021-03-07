import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    authenticate(data) {
        let headers = new HttpHeaders({
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
        });
        const options = { headers: headers };
        return this.http.post(`${environment.apiUrl}/api/User/login`, data, options);
    }
    register(data) {
        let headers = new HttpHeaders({
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
        });
        const options = { headers: headers };
        return this.http.post(`${environment.apiUrl}/api/User/register`, data, options);
    }
    isLoggedin() {
        const token = localStorage.getItem('token');
        return !!token;
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map