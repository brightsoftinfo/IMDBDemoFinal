import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
describe('RegisterComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [RouterTestingModule, ReactiveFormsModule]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should contain a default value for the registerForm', () => {
        expect(component.registerForm).toBeTruthy();
    });
    it('should contain a default value for the loginForm value is empty', () => {
        expect(component.registerForm.value).toEqual({ username: '', password: '' });
    });
});
//# sourceMappingURL=register.component.spec.js.map