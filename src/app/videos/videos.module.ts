import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { VideoEditorComponent } from './video-editor/video-editor.component';
import { VideoCategoriesComponent } from './video-categories/video-categories.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosService } from './videos.service';
import { VideoCategoriesEditorComponent } from './video-categories-editor/video-categories-editor.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [VideoEditorComponent, VideoCategoriesComponent, VideosListComponent, VideoCategoriesEditorComponent],
  entryComponents: [VideoEditorComponent, VideoCategoriesEditorComponent],
  providers: [VideosService]
})
export class VideosModule {}
