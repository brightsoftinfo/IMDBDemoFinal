import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(document, renderer, router, fb, loginService) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.fb = fb;
        this.loginService = loginService;
        this.submitted = false;
    }
    ngOnInit() {
        this.renderer.addClass(this.document.body, 'login-page');
        this.createLoginForm();
    }
    createLoginForm() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get getLoginForm() {
        return this.loginForm.controls;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'login-page');
    }
    onSubmit() {
        console.log('ok');
        // this.submitted = true
        // if(this.loginForm.invalid) return
        // console.log(this.loginForm.value)
        // const formData = new FormData()
        // formData.append("username", this.loginForm.value['username'])
        // formData.append("password", this.loginForm.value['password'])
        // this.loginService.authenticate(formData).subscribe((res) => {
        //   this.onLoginSuccess()
        // }, (err) => {
        //   this.onloginFaulure(err)
        // })
    }
    onLoginSuccess() {
        this.router.navigate(['dashboard']);
    }
    onloginFaulure(err) {
        alert(`User not found ${err}`);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __param(0, Inject(DOCUMENT))
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map