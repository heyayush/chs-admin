import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SongsListComponent } from './songs-list/songs-list.component';
import { SongCategoriesComponent } from './song-categories/song-categories.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { SongsService } from './songs.service';
import { SongCategoriesEditorComponent } from './song-categories-editor/song-categories-editor.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SongsListComponent, SongCategoriesComponent, SongEditorComponent, SongCategoriesEditorComponent],
  entryComponents: [SongEditorComponent, SongCategoriesEditorComponent],
  providers: [SongsService]
})
export class SongsModule {}
