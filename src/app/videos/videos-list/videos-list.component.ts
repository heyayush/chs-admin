import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import _ from 'lodash';
import { VideoEditorComponent } from '../video-editor/video-editor.component';
import VIDEOS from './mock-videos';

@Component({
	selector: 'app-videos-list',
	templateUrl: './videos-list.component.html',
	styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
	videos = VIDEOS;
	displayedColumns = ['id', 'title'];
	constructor(private dialog: MatDialog) {}

	ngOnInit() {}
	openEditor(video) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = video;
		dialogConfig.height = '80vh';
		dialogConfig.width = '70vh';

		this.dialog.open(VideoEditorComponent, dialogConfig);
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
		this.videos = _.reject(this.videos, item => {
			return item.id === video.id;
		});
	}
}
