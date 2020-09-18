import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  @Input() event;
  @Input() eventDetails;

  modalRef: BsModalRef;
  message: string;
  constructor(
    private modalService: BsModalService,
    private toastrService: ToastrService
  ) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.toastrService.success(this.message);
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}
