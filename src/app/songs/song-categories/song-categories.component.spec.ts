import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';

import { SongCategoriesComponent } from './song-categories.component';

describe('SongCategoriesComponent', () => {
	let component: SongCategoriesComponent;
	let fixture: ComponentFixture<SongCategoriesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [SharedModule],
			declarations: [SongCategoriesComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SongCategoriesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
