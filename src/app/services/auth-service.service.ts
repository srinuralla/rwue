import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router, private toastr: ToastrService) {}
  logout() {
    localStorage.removeItem('rwue_token');
    localStorage.removeItem('user_name');
    this.toastr.success('Logout', 'successfully');
    this.router.navigate(['login']);
  }
  isUserLogin() {
    return localStorage.getItem('rwue_token') ? true : false;
  }
}
