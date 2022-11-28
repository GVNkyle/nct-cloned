import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpReceived } from '@models/http-received';
import { Lyric } from '@models/lyric';
import { SongDetail } from '@models/song';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSong(key: string): Observable<SongDetail> {
    let params = new HttpParams().append('key', key);
    return this.http.get<HttpReceived>(`${this.apiUrl}song`, { params }).pipe(map(res => res.song));
  }

  getLyric(key: string): Observable<Lyric> {
    let params = new HttpParams().append('key', key);
    return this.http.get<HttpReceived>(`${this.apiUrl}lyric`, { params }).pipe(map(res => res.lyric));
  }

}
