import { Component, OnInit } from '@angular/core';
import recentEvents from './../../../assets/recentEventDetails.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recentEvents = recentEvents;
  constructor() {}

  ngOnInit(): void {}
}
