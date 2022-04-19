import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSoVamuComponent } from './image-so-vamu.component';

describe('ImageSoVamuComponent', () => {
  let component: ImageSoVamuComponent;
  let fixture: ComponentFixture<ImageSoVamuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSoVamuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSoVamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
