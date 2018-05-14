import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { SongCategories, SongsList } from '../song-interfaces';
import { SongsListService } from '../songs-list.service';
import { SongCategoriesEditorComponent } from '../song-categories-editor/song-categories-editor.component';

@Component({
  selector: 'app-song-categories',
  templateUrl: './song-categories.component.html',
  styleUrls: ['./song-categories.component.scss']
})
export class SongCategoriesComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  private songCategories: SongCategories[];

  constructor(private dialog: MatDialog, private songsListService: SongsListService) {}

  ngOnInit() {
    this.getSongCategories();
  }

  getSongCategories(): void {
    this.songsListService.getAllSongCategories().subscribe((SongCategoriesData: SongCategories[]) => {
      this.songCategories = SongCategoriesData;
    });
  }

  openEditor(video) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = video;
    dialogConfig.height = '80vh';
    dialogConfig.width = '70vh';
    this.dialog.open(SongCategoriesEditorComponent, dialogConfig);
  }

  onNew() {
    const video = {
      id: '',
      name: '',
      thumbnails: {
        '270x140': '',
        '295x144': '',
        '300x300': '',
        '341x307': ''
      },
      sequence: ''
    };
    this.openEditor(video);
  }

  _onEdit(song) {
    this.openEditor(song);
  }

  _onDelete(song) {
    this.songCategories = _.reject(this.songCategories, item => {
      return item.id === song.id;
    });
  }
}
