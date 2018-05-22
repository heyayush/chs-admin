import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';

import { VideoCategories } from '../video-interfaces';
import { VideosService } from '../videos.service';
import { VideoCategoriesEditorComponent } from '../video-categories-editor/video-categories-editor.component';

@Component({
  selector: 'app-video-categories',
  templateUrl: './video-categories.component.html',
  styleUrls: ['./video-categories.component.scss']
})
export class VideoCategoriesComponent implements OnInit {
  title = 'Video Categories';
  displayedColumns = ['id', 'name'];
  private videoCategories: VideoCategories[];
  private tableDataSource: MatTableDataSource<VideoCategories>;

  constructor(private dialog: MatDialog, private videosService: VideosService) {}

  ngOnInit() {
    this.getVideoCategories();
  }

  getVideoCategories(): void {
    this.videosService.getAllVideoCategories().subscribe((videoCategoriesData: VideoCategories[]) => {
      this.videoCategories = videoCategoriesData;
      this.tableDataSource = new MatTableDataSource(videoCategoriesData);
    });
  }

  openEditor(category) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = category;
    dialogConfig.height = '80vh';
    dialogConfig.width = '70vh';
    this.dialog.open(VideoCategoriesEditorComponent, dialogConfig);
  }

  onNew() {
    const category = {
      id: '',
      name: '',
      thumbnails: {
        '270x140': '',
        '295x144': '',
        '300x300': '',
        '341x307': ''
      },
      sequence: this.videoCategories.length + 1
    };
    this.openEditor(category);
  }

  onEdit(category: VideoCategories) {
    this.openEditor(category);
  }

  onDelete(category: VideoCategories) {
    this.videoCategories = _.reject(this.videoCategories, item => {
      return item.id === category.id;
    });
    this.videosService.deleteCategory(category);
  }
}
