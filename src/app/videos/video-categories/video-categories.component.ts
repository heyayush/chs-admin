import { Component, OnInit } from '@angular/core';
import VIDEOCATEGORIES from './mock-video-categories.js';
import _ from 'lodash';

@Component({
	selector: 'app-video-categories',
	templateUrl: './video-categories.component.html',
	styleUrls: ['./video-categories.component.scss']
})
export class VideoCategoriesComponent implements OnInit {
	displayedColumns = ['id', 'name'];
	videoCategories = VIDEOCATEGORIES;

	constructor() {}

	ngOnInit() {}

	_onEdit(video) {
		// this.openEditor(video);
		console.log('edit me');
	}

	_onDelete(video) {
		this.videoCategories = _.reject(this.videoCategories, item => {
			return item.id === video.id;
		});
	}
}
