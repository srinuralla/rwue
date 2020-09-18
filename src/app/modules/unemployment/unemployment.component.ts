import { Component, OnInit } from '@angular/core';
import category from '../../../assets/category.json';
import jobs from '../../../assets/jobs.json';

@Component({
  selector: 'app-unemployment',
  templateUrl: './unemployment.component.html',
  styleUrls: ['./unemployment.component.scss'],
})
export class UnemploymentComponent implements OnInit {
  jobCatergorys = category;
  jobs = jobs;
  constructor() {}

  ngOnInit(): void {}
}
