import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Validators } from '@angular/forms';
let RatingComponent = class RatingComponent {
    constructor(document, renderer, fb, activatedRoute, movieService, router) {
        this.document = document;
        this.renderer = renderer;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.movieService = movieService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.renderer.addClass(this.document.body, 'fp-page');
        this.createRatingForm();
    }
    createRatingForm() {
        this.rateForm = this.fb.group({
            rate: ['', Validators.required]
        });
    }
    get getRateForm() {
        return this.rateForm.controls;
    }
    submitRate() {
        this.submitted = true;
        if (this.rateForm.invalid)
            return;
        // const formData: any = new FormData();
        // formData.append("Id", this.activatedRoute.snapshot.params.m_id);
        // formData.append("Rating", this.rateForm.get("rate").value);
        // console.log(formData);
        console.log(this.rateForm.value);
        this.movieService.addRating({ Id: this.activatedRoute.snapshot.params.m_id, Rating: this.rateForm.value['rate'] }).subscribe((res) => {
            // if(res){
            // alert(`Rating Added Successfully!`)
            this.router.navigate(['/']);
            // }
        }, (err) => {
            this.router.navigate(['/']);
        });
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'fp-page');
    }
};
RatingComponent = __decorate([
    Component({
        selector: 'app-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.scss']
    }),
    __param(0, Inject(DOCUMENT))
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map