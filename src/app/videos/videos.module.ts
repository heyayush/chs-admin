import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoEditorComponent } from './video-editor/video-editor.component';
import { VideoCategoriesComponent } from './video-categories/video-categories.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { GridComponent } from '../shared/grid/grid.component';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SharedModule],
	declarations: [VideoEditorComponent, VideoCategoriesComponent, VideosListComponent],
	entryComponents: [VideoEditorComponent]
})
export class VideosModule {}
