import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrvComponent } from './hrv.component';

describe('HrvComponent', () => {
  let component: HrvComponent;
  let fixture: ComponentFixture<HrvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrvComponent]
    });
    fixture = TestBed.createComponent(HrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
