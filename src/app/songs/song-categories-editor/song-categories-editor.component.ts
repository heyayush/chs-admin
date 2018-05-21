import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SongCategories } from '../song-interfaces';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-categories-editor',
  templateUrl: './song-categories-editor.component.html',
  styleUrls: ['./song-categories-editor.component.scss']
})
export class SongCategoriesEditorComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private category: SongCategories, private songsService: SongsService) {}

  ngOnInit() {}

  onSubmit(category: SongCategories) {
    this.songsService.updateCategory(category);
  }
}
