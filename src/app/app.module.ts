import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { SharedModule } from './shared/shared.module';
import { SongsModule } from './songs/songs.module';
import { VideosModule } from './videos/videos.module';
import { LayoutModule } from './layout/layout.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production
      ? null
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, environment.inMemoryDBServiceOptions),
    SharedModule,
    LayoutModule,
    SongsModule,
    VideosModule
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
