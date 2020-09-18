import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEventDetailsComponent } from './women-event-details.component';

describe('WomenEventDetailsComponent', () => {
  let component: WomenEventDetailsComponent;
  let fixture: ComponentFixture<WomenEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
