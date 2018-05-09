import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { routes } from '../../app-routing.module';
import { SongsModule } from '../../songs/songs.module';
import { VideosModule } from '../../videos/videos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainContentComponent', () => {
	let component: MainContentComponent;
	let fixture: ComponentFixture<MainContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes(routes), VideosModule, SongsModule],
			declarations: [MainContentComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
