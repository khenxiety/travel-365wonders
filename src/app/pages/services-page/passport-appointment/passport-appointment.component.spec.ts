import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportAppointmentComponent } from './passport-appointment.component';

describe('PassportAppointmentComponent', () => {
  let component: PassportAppointmentComponent;
  let fixture: ComponentFixture<PassportAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
