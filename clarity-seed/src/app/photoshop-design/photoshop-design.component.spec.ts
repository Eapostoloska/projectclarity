import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshopDesignComponent } from './photoshop-design.component';

describe('PhotoshopDesignComponent', () => {
  let component: PhotoshopDesignComponent;
  let fixture: ComponentFixture<PhotoshopDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoshopDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoshopDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
