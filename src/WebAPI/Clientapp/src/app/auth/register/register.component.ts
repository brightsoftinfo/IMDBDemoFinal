import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy  {

  registerForm: FormGroup
  submitted = false 
  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'login-page');
    this.createregisterForm();
  }
  
  createregisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get getregisterForm() {
    return this.registerForm.controls 
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-page');
  }

  onSubmit() {
    this.submitted = true
    if(this.registerForm.invalid) return
    this.router.navigate(['dashboard']);
    console.log(this.registerForm.value);
  }

}
