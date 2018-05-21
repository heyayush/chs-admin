import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { VideosList, VideoCategories } from '../video-interfaces';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements OnInit {
  private videoCategories: VideoCategories[];

  constructor(@Inject(MAT_DIALOG_DATA) public video: VideosList, private videosService: VideosService) {}

  onSubmit(video: VideosList) {
    this.videosService.updateVideo(video);
  }

  addCast() {
    this.video.abridged_cast.push({
      name: '',
      id: '',
      characters: []
    });
  }

  ngOnInit() {
    this.getVideoCategories();
  }

  getVideoCategories(): void {
    this.videosService.getAllVideoCategories().subscribe((videoCategoriesData: VideoCategories[]) => {
      this.videoCategories = videoCategoriesData;
    });
  }
}
