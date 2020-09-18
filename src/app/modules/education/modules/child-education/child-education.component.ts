import { Component, OnInit } from '@angular/core';
import eventList from './../../../../../assets/event.json';

@Component({
  selector: 'app-child-education',
  templateUrl: './child-education.component.html',
  styleUrls: ['./child-education.component.scss'],
})
export class ChildEducationComponent implements OnInit {
  eventList = eventList;

  constructor() {}

  ngOnInit(): void {}
}
