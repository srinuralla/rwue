import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import eventDetails from './../../../../../../assets/eventDetails.json';

@Component({
  selector: 'app-child-event-details',
  templateUrl: './child-event-details.component.html',
  styleUrls: ['./child-event-details.component.scss'],
})
export class ChildEventDetailsComponent implements OnInit {
  eventDetails: any;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let eventId = +this.activeRoute.snapshot.paramMap.get('id');
    this.eventDetails = eventDetails.find((x) => x.eventId === eventId);

    //
  }
}
