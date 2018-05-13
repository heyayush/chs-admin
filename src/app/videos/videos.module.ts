import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { VideoEditorComponent } from './video-editor/video-editor.component';
import { VideoCategoriesComponent } from './video-categories/video-categories.component';
import { VideosListComponent } from './videos-list/videos-list.component';

import { VideosListService } from './videos-list.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [VideoEditorComponent, VideoCategoriesComponent, VideosListComponent],
  entryComponents: [VideoEditorComponent],
  providers: [VideosListService]
})
export class VideosModule {}
