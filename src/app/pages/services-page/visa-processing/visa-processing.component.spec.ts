import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaProcessingComponent } from './visa-processing.component';

describe('VisaProcessingComponent', () => {
  let component: VisaProcessingComponent;
  let fixture: ComponentFixture<VisaProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
