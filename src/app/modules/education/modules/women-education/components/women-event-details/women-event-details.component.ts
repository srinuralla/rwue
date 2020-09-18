import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import eventDetails from './../../../../../../../assets/eventDetails.json';
import events from './../../../../../../../assets/event.json';

@Component({
  selector: 'app-women-event-details',
  templateUrl: './women-event-details.component.html',
  styleUrls: ['./women-event-details.component.scss'],
})
export class WomenEventDetailsComponent implements OnInit {
  eventDetails: any;
  event: any;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let eventId = +this.activeRoute.snapshot.paramMap.get('id');

    this.eventDetails = eventDetails.find((x) => x.eventId === eventId);
    this.event = events.find((x) => x.eventId === eventId);

    //
  }
}
