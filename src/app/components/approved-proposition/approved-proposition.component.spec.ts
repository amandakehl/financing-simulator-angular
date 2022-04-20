import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPropositionComponent } from './approved-proposition.component';

describe('ApprovedPropositionComponent', () => {
  let component: ApprovedPropositionComponent;
  let fixture: ComponentFixture<ApprovedPropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedPropositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
