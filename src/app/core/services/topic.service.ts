import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpReceived } from '@models/http-received';
import { Topic, TopicDetail } from '@models/topics';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getTopicDetail(key: string): Observable<TopicDetail> {
    let params = new HttpParams().append('key', key);
    return this.http.get<HttpReceived>(`${this.apiUrl}topic`, { params }).pipe(map(res => <TopicDetail>res.topic));
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<HttpReceived>(`${this.apiUrl}topics`).pipe(map(res => <Topic[]>res.topic));
  }
}
