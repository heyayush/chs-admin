import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongCategoriesComponent } from './song-categories/song-categories.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { GridComponent } from '../shared/grid/grid.component';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SharedModule],
	declarations: [SongsListComponent, SongCategoriesComponent, SongEditorComponent],
	entryComponents: [SongEditorComponent]
})
export class SongsModule {}
