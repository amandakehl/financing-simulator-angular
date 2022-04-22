import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAheadComponent } from './button-ahead.component';

describe('ButtonAheadComponent', () => {
  let component: ButtonAheadComponent;
  let fixture: ComponentFixture<ButtonAheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
