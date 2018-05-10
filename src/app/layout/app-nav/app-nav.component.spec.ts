import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { MainContentComponent } from '../main-content/main-content.component';
import { AppNavComponent } from './app-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { routes } from '../../app-routing.module';
import { SongsModule } from '../../songs/songs.module';
import { VideosModule } from '../../videos/videos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes(routes),
          SharedModule,
          VideosModule,
          SongsModule
        ],
        declarations: [AppNavComponent, MainContentComponent]
      }).compileComponents();
      fixture = TestBed.createComponent(AppNavComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
