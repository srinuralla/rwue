import { ToastrModule } from 'ngx-toastr';
import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { CreateEventsComponent } from './components/create-events/create-events.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventDetailsComponent,
    EventsDisplayComponent,
    CreateEventsComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
    EventDetailsComponent,
    EventsDisplayComponent,
    CreateEventsComponent,
  ],
  providers: [BsModalService],
})
export class SharedModule {}
