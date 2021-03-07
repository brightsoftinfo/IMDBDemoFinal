import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
fdescribe('LoginComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [RouterTestingModule, ReactiveFormsModule]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should submitted false when login component are create', () => {
        expect(component.submitted).toBe(false);
    });
    it('should contain a default value for the loginForm', () => {
        expect(component.loginForm).toBeTruthy();
    });
    it('should contain a default value for the loginForm value is empty', () => {
        expect(component.loginForm.value).toEqual({ username: '', password: '' });
    });
});
//# sourceMappingURL=login.component.spec.js.map