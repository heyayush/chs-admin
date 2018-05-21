import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { SongsList, SongCategories } from './song-interfaces';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private songsUrl = environment.api.songs;
  private songCategoriesUrl = environment.api.songCategories;
  constructor(private http: HttpClient) {}

  /** GET songs from the server */
  getAllSongs(): Observable<SongsList[]> {
    return this.http.get<SongsList[]>(this.songsUrl).pipe(retry(2), catchError(this.handleError));
  }

  /** GET song categories from the server */
  getAllSongCategories(): Observable<SongCategories[]> {
    return this.http.get<SongCategories[]>(this.songCategoriesUrl).pipe(retry(2), catchError(this.handleError));
  }

  updateCategory(category: SongCategories) {}

  deleteCategory(category: SongCategories) {}

  updateSong(category: SongsList) {}

  deleteSong(category: SongsList) {}

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
