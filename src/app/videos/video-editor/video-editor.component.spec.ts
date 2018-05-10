import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { MAT_DIALOG_DATA } from '@angular/material';
import { VideoEditorComponent } from './video-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MockDialogData = {
  id: '1231238823133',
  title: 'Tiger Zinda Hai',
  categories: ['23423423423'],
  thumbnails: {
    '400x207': 'http://via.placeholder.com/400x207',
    '293x293': 'http://via.placeholder.com/293x293',
    '295x144': 'https://image.ibb.co/iamSGc/tiger.jpg',
    '640x333': 'https://preview.ibb.co/k4STNH/tiger.jpg',
    '341x307': 'https://image.ibb.co/m5Qtpx/tiger_details.jpg'
  },
  synopsis: 'Inspired by real events, Tiger Zinda Hai action, music and drama.',
  abridged_cast: [
    {
      name: 'Salman Khan',
      id: '162654049',
      characters: ['Tiger']
    },
    {
      name: 'Katrina Kaif',
      id: '162669130',
      characters: ['Zoya']
    }
  ],
  links: {
    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
  }
};

@NgModule({
  imports: [BrowserAnimationsModule, SharedModule],
  declarations: [VideoEditorComponent],
  entryComponents: [VideoEditorComponent],
  exports: [VideoEditorComponent]
})
class DialogTestModule {}

describe('VideoEditorComponent', () => {
  let component: VideoEditorComponent;
  let fixture: ComponentFixture<VideoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogTestModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: MockDialogData }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
