import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { VideoCategories } from '../video-interfaces';

@Component({
  selector: 'app-video-categories-editor',
  templateUrl: './video-categories-editor.component.html',
  styleUrls: ['./video-categories-editor.component.scss']
})
export class VideoCategoriesEditorComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public category: VideoCategories) {}

  ngOnInit() {}

  onSubmit(category) {}
}
