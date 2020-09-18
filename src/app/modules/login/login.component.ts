import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import users from './../../../assets/users.json';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  submit() {
    // this.authService.logout();
    let user = users.find(
      (x) =>
        x.username.toLowerCase() === this.loginForm.value.userName.toLowerCase()
    );
    if (user) {
      if (user.password === this.loginForm.value.password) {
        localStorage.setItem('rwue_token', 'token');
        localStorage.setItem('user_name', this.loginForm.value.userName);
        this.toastr.success('Login Successfully');
        //  Navigate  Dashboard
        this.router.navigate(['']);
      }
    } else {
      this.toastr.error(
        'Please verify credential',
        'Invalid Username/Password'
      );
    }
  }

  registerUser() {
    // Register page navigate
    this.router.navigate(['register']);
  }
}
