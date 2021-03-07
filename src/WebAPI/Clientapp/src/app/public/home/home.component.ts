import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  allMovies:any = []
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false; 
  constructor(public movieServ: MovieService, public fb: FormBuilder, private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.getAllMovie()
    this.createLoginForm()
    this.createregisterForm()
  }

  get checkLogin() {
    return this.loginService.isLoggedin()
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  createregisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get getLoginForm() {
    return this.loginForm.controls 
  }

  get getregisterForm() {
    return this.registerForm.controls 
  }

  onLoginSubmit() {
    this.submitted = true
    if(this.loginForm.invalid) return
    this.loginService.authenticate(this.loginForm.value).subscribe((res) => {
        console.log(res)
        if(res){
          localStorage.setItem('token', res['token'])
        }
    }, (err) => {
      console.log(err)
    })
  }

  onRegisterSubmit() {
    this.submitted = true
    if(this.registerForm.invalid) return
    // this.router.navigate(['dashboard']);
    this.loginService.register(this.registerForm.value).subscribe((res) => {
      if(res){
        alert(`${res['message']}`)
      }
    }, (err) => {
      console.log(err)
    })
  }
  getAllMovie() {
    this.movieServ.getMovies().subscribe((res) => {
      this.allMovies = []
      this.allMovies = res
    }, (err) => {
      console.log(err)
    })
  }

}
