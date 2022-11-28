import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpReceived } from '@models/http-received';
import { PlaylistDetail } from '@models/playlist';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPlaylistDetail(key: string): Observable<PlaylistDetail> {
    let params = new HttpParams().append('key', key)
    return this.http.get<HttpReceived>(`${this.apiUrl}playlist`, { params }).pipe(map(res => res.playlist));
  }

}
