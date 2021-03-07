import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(document, renderer, router, fb) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.fb = fb;
        this.submitted = false;
    }
    ngOnInit() {
        this.renderer.addClass(this.document.body, 'login-page');
        this.createregisterForm();
    }
    createregisterForm() {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get getregisterForm() {
        return this.registerForm.controls;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'login-page');
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid)
            return;
        this.router.navigate(['dashboard']);
        console.log(this.registerForm.value);
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __param(0, Inject(DOCUMENT))
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map