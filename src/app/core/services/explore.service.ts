import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Artist } from '@models/artist';
import { HttpReceived } from '@models/http-received';
import { PlaylistDetail } from '@models/playlist';
import { SongDetail } from '@models/song';
import { VideoDetail } from '@models/video';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getExplore(page: number = 1, type: "song" | "playlist" | "mv" = "song"): Observable<SongDetail[] | PlaylistDetail[] | VideoDetail[]> {
    let params = new HttpParams().append('type', type).append('page', page);
    return this.http.get<HttpReceived>(`${this.apiUrl}explore`, { params }).pipe(map(res => res.data));
  }

  getExploreArtists(gender: number): Observable<Artist[]> {
    let params = new HttpParams().append('gender', gender);
    return this.http.get<HttpReceived>(`${this.apiUrl}exploreArtists`, { params }).pipe(map(res => res.artist));
  }
}
