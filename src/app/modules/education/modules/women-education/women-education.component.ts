import { Component, OnInit } from '@angular/core';
import eventList from './../../../../../assets/event.json';
@Component({
  selector: 'app-women-education',
  templateUrl: './women-education.component.html',
  styleUrls: ['./women-education.component.scss'],
})
export class WomenEducationComponent implements OnInit {
  eventList = eventList;
  constructor() {}

  ngOnInit(): void {}
}
