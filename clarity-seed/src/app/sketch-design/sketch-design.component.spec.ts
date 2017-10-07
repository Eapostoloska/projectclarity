import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchDesignComponent } from './sketch-design.component';

describe('SketchDesignComponent', () => {
  let component: SketchDesignComponent;
  let fixture: ComponentFixture<SketchDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
