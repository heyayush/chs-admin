import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { VideosList, VideoCategories } from './video-interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideosListService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private videosUrl = environment.api.videos;
  private videoCategoriesUrl = environment.api.videoCategories;

  constructor(private http: HttpClient) {}

  /** GET videos from the server */
  getAllVideos(): Observable<VideosList[]> {
    return this.http.get<VideosList[]>(this.videosUrl).pipe(retry(2), catchError(this.handleError));
  }

  /** GET videos from the server */
  getAllVideoCategories(): Observable<VideoCategories[]> {
    return this.http.get<VideoCategories[]>(this.videoCategoriesUrl).pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
