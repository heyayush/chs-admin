import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

import { VideoCategories } from '../video-interfaces';
import { VideosListService } from '../videos-list.service';

@Component({
  selector: 'app-video-categories',
  templateUrl: './video-categories.component.html',
  styleUrls: ['./video-categories.component.scss']
})
export class VideoCategoriesComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  private videoCategories: VideoCategories[];

  constructor(private videosListService: VideosListService) {}

  ngOnInit() {
    this.getVideoCategories();
  }

  getVideoCategories(): void {
    this.videosListService.getAllVideoCategories().subscribe((videoCategoriesData: VideoCategories[]) => {
      this.videoCategories = videoCategoriesData;
    });
  }

  _onEdit(video) {
    // this.openEditor(video);
    console.log('edit me');
  }

  _onDelete(video) {
    this.videoCategories = _.reject(this.videoCategories, item => {
      return item.id === video.id;
    });
  }
}
