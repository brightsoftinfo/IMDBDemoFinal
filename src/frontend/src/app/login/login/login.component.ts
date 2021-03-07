import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup
  submitted = false 
  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'login-page');
    this.createLoginForm();
  }
  
  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get getLoginForm() {
    return this.loginForm.controls 
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-page');
  }

  onSubmit() {
    this.submitted = true
    if(this.loginForm.invalid) return
    this.router.navigate(['dashboard']);
    console.log(this.loginForm.value);
  }

}
