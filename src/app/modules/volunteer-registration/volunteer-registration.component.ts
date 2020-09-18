import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import users from './../../../assets/users.json';
@Component({
  selector: 'app-volunteer-registration',
  templateUrl: './volunteer-registration.component.html',
  styleUrls: ['./volunteer-registration.component.scss'],
})
export class VolunteerRegistrationComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}
  submit() {
    let user = users.find(
      (x) =>
        x.username.toLowerCase() === this.loginForm.value.userName.toLowerCase()
    );
    if (user) {
      if (user.password === this.loginForm.value.password) {
        localStorage.setItem('rwue_token', 'token');
        localStorage.setItem('user_name', this.loginForm.value.userName);
        this.toastr.success('Login Successfully');
        this.router.navigate(['']);
        this.loginForm.reset();
        //  Navigate  Dashboard
      }
    } else {
      this.toastr.error(
        'Please verify credential',
        'Invalid Username/Password'
      );
    }
  }
  register() {
    if (this.registrationForm.value.firstName) {
      localStorage.setItem('rwue_token', 'token');
      localStorage.setItem('name', this.registrationForm.value.firstName);
      this.toastr.success('Registered Successfully');
      this.router.navigate(['']);
    }
  }
}
