import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorDesignComponent } from './illustrator-design.component';

describe('IllustratorDesignComponent', () => {
  let component: IllustratorDesignComponent;
  let fixture: ComponentFixture<IllustratorDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustratorDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
