import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-display',
  templateUrl: './events-display.component.html',
  styleUrls: ['./events-display.component.scss'],
})
export class EventsDisplayComponent {
  @Input() eventList: any[];
  constructor(private router: Router) {}
  navigateClick(e) {
    this.router.navigate(e.routeLink);
  }
}
