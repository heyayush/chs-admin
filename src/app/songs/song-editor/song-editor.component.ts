import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SongCategories, SongsList } from '../song-interfaces';
import { SongsListService } from '../songs-list.service';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.scss']
})
export class SongEditorComponent implements OnInit {
  private songCategories: SongCategories[];

  constructor(@Inject(MAT_DIALOG_DATA) public song: SongsList, private songsListService: SongsListService) {}

  onSubmit(song) {}

  ngOnInit() {
    this.getSongCategories();
  }

  getSongCategories(): void {
    this.songsListService.getAllSongCategories().subscribe((songCategoriesData: SongCategories[]) => {
      this.songCategories = songCategoriesData;
    });
  }
}
