import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('rwue_token')) {
      // logged in so return true
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
