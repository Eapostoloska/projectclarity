import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDesignPostComponent } from './visual-design-post.component';

describe('VisualDesignPostComponent', () => {
  let component: VisualDesignPostComponent;
  let fixture: ComponentFixture<VisualDesignPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDesignPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDesignPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
