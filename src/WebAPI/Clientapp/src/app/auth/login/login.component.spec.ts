import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { LoginServiceMock } from 'src/tests/mocks/services/login-service.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        {provide: LoginService, useClass: LoginServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should submitted false when login component are create', () => {
    expect(component.submitted).toBe(false)
  });

  it('should contain a default value for the loginForm', () => {
    expect(component.loginForm).toBeTruthy()
  });

  it('should contain a default value for the loginForm value is empty', () => {
    expect(component.loginForm.value).toEqual({ username: '', password: ''})
  });

  it('should login user if the form is valid and should navigate to the dashboard', () => {
      component.loginForm.setValue({ username: 'admin', password: 'admin'});
      spyOn(component.router, 'navigate')
      component.onSubmit();
      expect(component.router.navigate).toHaveBeenCalledWith(['dashboard'])
  });

  it('should not do the login call if the form is invalid', () => {
    component.loginForm.setValue({ username: '', password: ''});
    spyOn(component.router, 'navigate')
    component.onSubmit();
    expect(component.router.navigate).not.toHaveBeenCalled()
  });
  

});
