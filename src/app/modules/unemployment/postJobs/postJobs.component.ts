import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import category from './../../../../assets/category.json';

@Component({
  selector: 'app-postJobs',
  templateUrl: './postJobs.component.html',
  styleUrls: ['./postJobs.component.scss'],
})
export class PostJobsComponent implements OnInit {
  postJobsForm: FormGroup;
  categories = category;
  jobType = [
    {
      jobType: 'DailyWage',
      jobId: 1,
    },
    {
      jobType: 'Salary',
      jobId: 2,
    },
  ];
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.postJobsForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
      jobType: new FormControl('', Validators.required),
    });
  }

  changeJob(e: any) {
    console.log(e);
  }
  jobTypeChange(e: any) {
    console.log(e);
  }

  postJob() {
    // Register page navigate
    this.toastr.success('Job posted Successfully');
    this.router.navigate(['/']);
  }
}
