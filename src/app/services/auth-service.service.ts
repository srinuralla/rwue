import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _IsUserLogin = new BehaviorSubject<boolean>(false);
  constructor(private router: Router, private toastr: ToastrService) {
    this.setIsUserLogin(localStorage.getItem('rwue_token') ? true : false);
  }
  logout() {
    localStorage.removeItem('rwue_token');
    localStorage.removeItem('user_name');
    this.toastr.success('Logout', 'successfully');
    this.setIsUserLogin(false);
  }
  getIsUserLogin() {
    return this._IsUserLogin.asObservable();
  }
  setIsUserLogin(value: any) {
    this._IsUserLogin.next(value);
  }
}
