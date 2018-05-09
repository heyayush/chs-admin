import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { SongsModule } from '../songs/songs.module';
import { VideosModule } from '../videos/videos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from '../shared/shared.module';

describe('LayoutComponent', () => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserAnimationsModule,
				RouterTestingModule.withRoutes(routes),
				SharedModule,
				VideosModule,
				SongsModule
			],
			declarations: [LayoutComponent, AppNavComponent, MainContentComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
