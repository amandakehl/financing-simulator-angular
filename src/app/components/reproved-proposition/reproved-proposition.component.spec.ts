import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprovedPropositionComponent } from './reproved-proposition.component';

describe('ReprovedPropositionComponent', () => {
  let component: ReprovedPropositionComponent;
  let fixture: ComponentFixture<ReprovedPropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprovedPropositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprovedPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
