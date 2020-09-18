import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EventDetailsComponent, EventsDisplayComponent],
  imports: [CommonModule],
  exports: [EventDetailsComponent, EventsDisplayComponent],
})
export class SharedModule {}
