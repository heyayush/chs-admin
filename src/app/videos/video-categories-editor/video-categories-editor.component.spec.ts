import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCategoriesEditorComponent } from './video-categories-editor.component';

describe('VideoCategoriesEditorComponent', () => {
  let component: VideoCategoriesEditorComponent;
  let fixture: ComponentFixture<VideoCategoriesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCategoriesEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCategoriesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
