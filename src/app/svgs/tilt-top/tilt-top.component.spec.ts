import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltTopComponent } from './tilt-top.component';

describe('TiltTopComponent', () => {
  let component: TiltTopComponent;
  let fixture: ComponentFixture<TiltTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiltTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
