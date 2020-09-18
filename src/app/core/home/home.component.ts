import { Component, OnInit } from '@angular/core';
import recentEvents from './../../../assets/recentEventDetails.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
  ];

  constructor() {}
}
