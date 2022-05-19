import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInformationComponent } from './first-information.component';

describe('FirstInformationComponent', () => {
  let component: FirstInformationComponent;
  let fixture: ComponentFixture<FirstInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstInformationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
