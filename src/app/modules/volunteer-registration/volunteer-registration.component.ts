import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer-registration',
  templateUrl: './volunteer-registration.component.html',
  styleUrls: ['./volunteer-registration.component.scss']
})
export class VolunteerRegistrationComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),

  });
  constructor() { }

  ngOnInit(): void {
  }

}
