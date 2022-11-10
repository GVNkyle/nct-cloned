import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getTopicDetail(key: string) {
    let params = new HttpParams().append('key', key);
    return this.http.get(`${this.apiUrl}topic`, { params });
  }

  getTopics() {
    return this.http.get(`${this.apiUrl}topics`);
  }
}
