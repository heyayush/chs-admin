import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';

import { SongCategories, SongsList } from '../song-interfaces';
import { SongsService } from '../songs.service';
import { SongCategoriesEditorComponent } from '../song-categories-editor/song-categories-editor.component';

@Component({
  selector: 'app-song-categories',
  templateUrl: './song-categories.component.html',
  styleUrls: ['./song-categories.component.scss']
})
export class SongCategoriesComponent implements OnInit {
  title = 'Song Categories';
  displayedColumns = ['id', 'name'];
  private songCategories: SongCategories[];
  private tableDataSource: MatTableDataSource<SongCategories>;
  constructor(private dialog: MatDialog, private songsService: SongsService) {}

  ngOnInit() {
    this.getSongCategories();
  }

  getSongCategories(): void {
    this.songsService.getAllSongCategories().subscribe((SongCategoriesData: SongCategories[]) => {
      this.songCategories = SongCategoriesData;
      this.tableDataSource = new MatTableDataSource(SongCategoriesData);
    });
  }

  openEditor(category: SongCategories) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = category;
    dialogConfig.height = '80vh';
    dialogConfig.width = '70vh';
    this.dialog.open(SongCategoriesEditorComponent, dialogConfig);
  }

  onNew() {
    const category = {
      id: '',
      name: '',
      thumbnails: {
        '270x140': '',
        '295x144': '',
        '300x300': '',
        '341x307': ''
      },
      sequence: this.songCategories.length + 1
    };
    this.openEditor(category);
  }

  onEdit(category: SongCategories) {
    this.openEditor(category);
  }

  onDelete(category: SongCategories) {
    this.songCategories = _.reject(this.songCategories, item => {
      return item.id === category.id;
    });
    this.songsService.deleteCategory(category);
  }
}
