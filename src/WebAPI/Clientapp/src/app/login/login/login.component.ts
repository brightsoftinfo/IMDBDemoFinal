import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
    public fb: FormBuilder,
    public loginService: LoginService
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
    console.log('ok')
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
    this.router.navigate(['dashboard'])
  }

  onloginFaulure(err: string) {
    alert(`User not found ${err}`)
  }

}
