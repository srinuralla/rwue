import { Component, OnInit } from '@angular/core';
import recentEvents from './../../../assets/recentEventDetails.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recentEvents = recentEvents;

  newsDetails = [
    {
      news: "'The Cyberwar Needs More Women on the Front Lines'",
      id: '1',
    },
    {
      news: "'The Cyberwar Needs More Women on the Front Lines'",
      id: '2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
