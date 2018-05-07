import { Component, OnInit } from '@angular/core';
import SONGCATEGORIES from './mock-song-categories.js';
import _ from 'lodash';

@Component({
	selector: 'app-song-categories',
	templateUrl: './song-categories.component.html',
	styleUrls: ['./song-categories.component.scss']
})
export class SongCategoriesComponent implements OnInit {
	displayedColumns = ['id', 'name'];
	songCategories = SONGCATEGORIES;

	constructor() {}

	ngOnInit() {}

	_onEdit(video) {
		// this.openEditor(video);
		console.log('edit me');
	}

	_onDelete(video) {
		this.songCategories = _.reject(this.songCategories, item => {
			return item.id === video.id;
		});
	}
}
