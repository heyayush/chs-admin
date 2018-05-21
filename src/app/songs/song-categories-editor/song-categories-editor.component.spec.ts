import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCategoriesEditorComponent } from './song-categories-editor.component';

describe('SongCategoriesEditorComponent', () => {
  let component: SongCategoriesEditorComponent;
  let fixture: ComponentFixture<SongCategoriesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongCategoriesEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCategoriesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
