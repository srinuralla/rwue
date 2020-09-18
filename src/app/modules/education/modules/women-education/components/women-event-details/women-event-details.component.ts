import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-women-event-details',
  templateUrl: './women-event-details.component.html',
  styleUrls: ['./women-event-details.component.scss'],
})
export class WomenEventDetailsComponent implements OnInit {
  eventDetails: any;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //
  }
}
