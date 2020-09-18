import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent implements OnInit {
  createEventForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.createEventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      startDate: new FormControl(new Date(), Validators.required),
      endDate: new FormControl(new Date(), Validators.required),
      eventDesc: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      fullAddress: new FormControl('', Validators.required),
    });
  }

  createEvent() {
    // Register page navigate
    this.toastr.success('Event created Successfully');
    this.router.navigate(['/']);
  }

}
