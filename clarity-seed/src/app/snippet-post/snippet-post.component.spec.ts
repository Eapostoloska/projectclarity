import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetPostComponent } from './snippet-post.component';

describe('SnippetPostComponent', () => {
  let component: SnippetPostComponent;
  let fixture: ComponentFixture<SnippetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
