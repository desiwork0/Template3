import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextckmponentComponent } from './textckmponent.component';

describe('TextckmponentComponent', () => {
  let component: TextckmponentComponent;
  let fixture: ComponentFixture<TextckmponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextckmponentComponent]
    });
    fixture = TestBed.createComponent(TextckmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
