import { Component, OnInit } from '@angular/core';
import recentEvents from './../../../assets/recentEventDetails.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recentEvents = recentEvents;
  newsOne;
  newsTwo;
  newsDetails = [
    {
      news: "'The Cyberwar Needs More Women on the Front Lines'",
      id: '1',
    },
    {
      news:
        "'Six year old UP girl becomes the youngest trekker to reach the Kangchenjunga Base Camp '",
      id: '2',
    },
    {
      news:
        "'Indian Air Force to welcome it’s first ever Women Fighter Pilots soon'",
      id: '1',
    },
    {
      news: "'The Cyberwar Needs More Women on the Front Lines'",
      id: '2',
    },
    {
      news:
        "'Six year old UP girl becomes the youngest trekker to reach the Kangchenjunga Base Camp '",
      id: '2',
    },
    {
      news:
        "'Indian Air Force to welcome it’s first ever Women Fighter Pilots soon'",
      id: '1',
    },
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

  ngOnInit(): void {
    let i = 0;
    (function repeat(times) {
      if (++i > 5) return;
      setTimeout(function () {
        this.newsOne = this.news[Math.floor(Math.random() * 6) + 1];
        this.newsTwo = this.news[Math.floor(Math.random() * 6) + 1];
        repeat();
      }, 5000);
    })();
  }
}
