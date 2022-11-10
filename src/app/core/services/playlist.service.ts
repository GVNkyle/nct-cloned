import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPlaylistDetail(key: string) {
    let params = new HttpParams().append('key', key)
    return this.http.get(`${this.apiUrl}playlist`, { params });
  }

}
