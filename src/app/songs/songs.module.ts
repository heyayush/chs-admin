import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SongsListComponent } from './songs-list/songs-list.component';
import { SongCategoriesComponent } from './song-categories/song-categories.component';
import { SongEditorComponent } from './song-editor/song-editor.component';

import { SongsListService } from './songs-list.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SongsListComponent, SongCategoriesComponent, SongEditorComponent],
  entryComponents: [SongEditorComponent],
  providers: [SongsListService]
})
export class SongsModule {}
