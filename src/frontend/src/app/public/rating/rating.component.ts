import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy  {
  rateForm: FormGroup
  submitted = false
  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'fp-page');
    this.createRatingForm()
  }

  createRatingForm() {
    this.rateForm = this.fb.group({
        rate: ['', Validators.required]
    })
  }

  get getRateForm() {
    return this.rateForm.controls
  }

  submitRate() {
    this.submitted = true
    if(this.rateForm.invalid) return
    console.log(this.rateForm.value)
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'fp-page');
  }

}
