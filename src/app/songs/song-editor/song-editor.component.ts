import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SongCategories, SongsList } from '../song-interfaces';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.scss']
})
export class SongEditorComponent implements OnInit {
  private songCategories: SongCategories[];

  constructor(@Inject(MAT_DIALOG_DATA) public song: SongsList, private songsService: SongsService) {}

  onSubmit(song: SongsList) {
    this.songsService.updateSong(song);
  }

  ngOnInit() {
    this.getSongCategories();
  }

  getSongCategories(): void {
    this.songsService.getAllSongCategories().subscribe((songCategoriesData: SongCategories[]) => {
      this.songCategories = songCategoriesData;
    });
  }
}
