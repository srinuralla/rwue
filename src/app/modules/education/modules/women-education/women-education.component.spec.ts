import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEducationComponent } from './women-education.component';

describe('WomenEducationComponent', () => {
  let component: WomenEducationComponent;
  let fixture: ComponentFixture<WomenEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
