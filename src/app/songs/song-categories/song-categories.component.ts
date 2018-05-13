import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

import { SongCategories, SongsList } from '../song-interfaces';
import { SongsListService } from '../songs-list.service';

@Component({
  selector: 'app-song-categories',
  templateUrl: './song-categories.component.html',
  styleUrls: ['./song-categories.component.scss']
})
export class SongCategoriesComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  private songCategories: SongCategories[];

  constructor(private songsListService: SongsListService) {}

  ngOnInit() {
    this.getSongCategories();
  }

  getSongCategories(): void {
    this.songsListService.getAllSongCategories().subscribe((SongCategoriesData: SongCategories[]) => {
      this.songCategories = SongCategoriesData;
    });
  }

  _onEdit(song) {
    // this.openEditor(song);
    console.log('edit me');
  }

  _onDelete(song) {
    this.songCategories = _.reject(this.songCategories, item => {
      return item.id === song.id;
    });
  }
}
