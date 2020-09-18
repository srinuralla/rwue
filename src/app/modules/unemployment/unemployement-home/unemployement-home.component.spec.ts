import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemployementHomeComponent } from './unemployement-home.component';

describe('UnemployementHomeComponent', () => {
  let component: UnemployementHomeComponent;
  let fixture: ComponentFixture<UnemployementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnemployementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemployementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
