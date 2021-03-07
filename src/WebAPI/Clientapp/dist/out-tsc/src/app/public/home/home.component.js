import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let HomeComponent = class HomeComponent {
    constructor(movieServ, fb, router, loginService) {
        this.movieServ = movieServ;
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.allMovies = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.getAllMovie();
        this.createLoginForm();
        this.createregisterForm();
    }
    get checkLogin() {
        return this.loginService.isLoggedin();
    }
    createLoginForm() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    createregisterForm() {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get getLoginForm() {
        return this.loginForm.controls;
    }
    get getregisterForm() {
        return this.registerForm.controls;
    }
    onLoginSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid)
            return;
        this.loginService.authenticate(this.loginForm.value).subscribe((res) => {
            console.log(res);
            if (res) {
                localStorage.setItem('token', res['token']);
            }
        }, (err) => {
            console.log(err);
        });
    }
    onRegisterSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid)
            return;
        // this.router.navigate(['dashboard']);
        this.loginService.register(this.registerForm.value).subscribe((res) => {
            if (res) {
                alert(`${res['message']}`);
            }
        }, (err) => {
            console.log(err);
        });
    }
    getAllMovie() {
        this.movieServ.getMovies().subscribe((res) => {
            this.allMovies = [];
            this.allMovies = res;
        }, (err) => {
            console.log(err);
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map