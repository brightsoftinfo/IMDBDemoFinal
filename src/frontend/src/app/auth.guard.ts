import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authServices: LoginService, private _router: Router) { }

  canActivate(): boolean {
    if (this._authServices.isLoggedin()) {
      return true;
    } else {
      this._router.navigate(['']);
      return false;
    }
  }
}