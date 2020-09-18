import { AuthService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLogin = this.authService.getIsUserLogin();
  }
  logout() {
    this.authService.logout();
  }
}
