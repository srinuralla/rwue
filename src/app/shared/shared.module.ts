import { ToastrModule } from 'ngx-toastr';
import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [EventDetailsComponent, EventsDisplayComponent],
  imports: [CommonModule, ModalModule, ToastrModule.forRoot()],
  exports: [EventDetailsComponent, EventsDisplayComponent],
  providers: [BsModalService],
})
export class SharedModule {}
