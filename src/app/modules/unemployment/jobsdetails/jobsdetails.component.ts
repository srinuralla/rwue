import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jobs from '../../../../assets/jobs.json';

@Component({
  selector: 'app-jobsdetails',
  templateUrl: './jobsdetails.component.html',
  styleUrls: ['./jobsdetails.component.scss'],
})
export class JobsdetailsComponent implements OnInit {
  jobid: number;
  jobs = jobs;
  currentJob: any;
  constructor(private route: ActivatedRoute) {
    this.jobid = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.currentJob = this.jobs.find((e) => e.id === this.jobid);
    console.log(this.currentJob);
  }
}
