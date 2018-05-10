import { Component, OnInit, Inject } from '@angular/core';
import VIDEOCATEGORIES from '../video-categories/mock-video-categories.js';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements OnInit {
  videoCategories = VIDEOCATEGORIES;

  constructor(@Inject(MAT_DIALOG_DATA) public video: any) {}

  onSubmit(video) {}

  addCast() {
    this.video.abridged_cast.push({ name: '' });
  }

  ngOnInit() {}
}
