import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import _ from 'lodash';
import { SongEditorComponent } from '../song-editor/song-editor.component';
import { SongsList } from '../song-interfaces';

@Component({
	selector: 'app-songs-list',
	templateUrl: './songs-list.component.html',
	styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
	private songs: SongsList;
	displayedColumns = ['id', 'title'];
	constructor(private dialog: MatDialog) {}

	ngOnInit() {}
	openEditor(song) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = song;
		dialogConfig.height = '80vh';
		dialogConfig.width = '70vh';

		this.dialog.open(SongEditorComponent, dialogConfig);
	}

	onNew() {
		const song = {
			id: '',
			title: '',
			album: '',
			duration: '',
			categories: [],
			thumbnails: {
				'54x54': '',
				'40x40': ''
			},
			links: {
				download: ''
			}
		};
		this.openEditor(song);
	}

	_onEdit(song) {
		this.openEditor(song);
	}

	_onDelete(song) {
		this.songs = _.reject(this.songs, item => {
			return item.id === song.id;
		});
	}
}
