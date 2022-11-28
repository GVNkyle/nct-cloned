import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpReceived } from '@models/http-received';
import { VideoDetail } from '@models/video';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getVideoDetail(key: string): Observable<VideoDetail> {
    let params = new HttpParams().append('key', key);
    return this.http.get<HttpReceived>(`${this.apiUrl}video`, { params }).pipe(map(res => res.video));
  }
}
