import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponenetComponent } from './form-componenet.component';

describe('FormComponenetComponent', () => {
  let component: FormComponenetComponent;
  let fixture: ComponentFixture<FormComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponenetComponent]
    });
    fixture = TestBed.createComponent(FormComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
