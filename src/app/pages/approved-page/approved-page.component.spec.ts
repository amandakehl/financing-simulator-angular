import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPageComponent } from './approved-page.component';

describe('ApprovedPageComponent', () => {
  let component: ApprovedPageComponent;
  let fixture: ComponentFixture<ApprovedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
