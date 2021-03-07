import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { EditMovieComponent } from './edit-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
describe('EditMovieComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [EditMovieComponent],
            imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EditMovieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-movie.component.spec.js.map