import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSong(key: string) {
    let params = new HttpParams().append('key', key);
    return this.http.get(`${this.apiUrl}song`, { params });
  }

  getLyric(key: string) {
    let params = new HttpParams().append('key', key);
    return this.http.get(`${this.apiUrl}lyric`, { params });
  }

}
