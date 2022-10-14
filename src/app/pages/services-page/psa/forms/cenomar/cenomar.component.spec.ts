import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenomarComponent } from './cenomar.component';

describe('CenomarComponent', () => {
  let component: CenomarComponent;
  let fixture: ComponentFixture<CenomarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenomarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
