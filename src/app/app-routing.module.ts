import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { VideosListComponent } from './videos/videos-list/videos-list.component';
import { VideoCategoriesComponent } from './videos/video-categories/video-categories.component';
import { SongCategoriesComponent } from './songs/song-categories/song-categories.component';

const routes: Routes = [
	{ path: 'videos', component: VideosListComponent },
	{ path: 'songs', component: SongsListComponent },
	{ path: 'video-categories', component: VideoCategoriesComponent },
	{ path: 'song-categories', component: SongCategoriesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
