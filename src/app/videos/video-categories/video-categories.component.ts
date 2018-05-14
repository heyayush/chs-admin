import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { VideoCategories } from '../video-interfaces';
import { VideosListService } from '../videos-list.service';
import { VideoCategoriesEditorComponent } from '../video-categories-editor/video-categories-editor.component';

@Component({
  selector: 'app-video-categories',
  templateUrl: './video-categories.component.html',
  styleUrls: ['./video-categories.component.scss']
})
export class VideoCategoriesComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  private videoCategories: VideoCategories[];

  constructor(private dialog: MatDialog, private videosListService: VideosListService) {}

  ngOnInit() {
    this.getVideoCategories();
  }

  getVideoCategories(): void {
    this.videosListService.getAllVideoCategories().subscribe((videoCategoriesData: VideoCategories[]) => {
      this.videoCategories = videoCategoriesData;
    });
  }

  openEditor(video) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = video;
    dialogConfig.height = '80vh';
    dialogConfig.width = '70vh';
    this.dialog.open(VideoCategoriesEditorComponent, dialogConfig);
  }

  onNew() {
    const video = {
      id: '',
      name: '',
      thumbnails: {
        '270x140': '',
        '295x144': '',
        '300x300': '',
        '341x307': ''
      },
      sequence: ''
    };
    this.openEditor(video);
  }

  _onEdit(video) {
    this.openEditor(video);
  }

  _onDelete(video) {
    this.videoCategories = _.reject(this.videoCategories, item => {
      return item.id === video.id;
    });
  }
}
