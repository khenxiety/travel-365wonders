import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltBottomComponent } from './tilt-bottom.component';

describe('TiltBottomComponent', () => {
  let component: TiltBottomComponent;
  let fixture: ComponentFixture<TiltBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiltBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
