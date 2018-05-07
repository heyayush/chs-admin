import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import _ from 'lodash';
import { SongEditorComponent } from '../song-editor/song-editor.component';
import SONGS from './mock-songs.js';

@Component({
	selector: 'app-songs-list',
	templateUrl: './songs-list.component.html',
	styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
	songs = SONGS;
	displayedColumns = ['id', 'title'];
	constructor(private dialog: MatDialog) {}

	ngOnInit() {}
	openEditor(video) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = video;
		dialogConfig.height = '80vh';
		dialogConfig.width = '70vh';

		this.dialog.open(SongEditorComponent, dialogConfig);
	}

	onNew() {
		const video = {
			id: '',
			title: '',
			categories: [],
			thumbnails: {
				'400x207': '',
				'293x293': '',
				'295x144': '',
				'640x333': '',
				'341x307': ''
			},
			synopsis: '',
			abridged_cast: [
				{
					name: ''
				}
			],
			links: {
				download: ''
			}
		};
		this.openEditor(video);
	}

	_onEdit(video) {
		this.openEditor(video);
	}

	_onDelete(video) {
		this.songs = _.reject(this.songs, item => {
			return item.id === video.id;
		});
	}
}
