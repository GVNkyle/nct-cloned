import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpReceived } from '@models/http-received';
import { Keyword } from '@models/index';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  searchKeyword(keyword: string) {
    let params = new HttpParams().append('keyword', keyword);
    return this.http.get(`${this.apiUrl}search`, { params });
  }

  getTopKeyword(): Observable<Keyword[]>{
    return this.http.get<HttpReceived>(`${this.apiUrl}top-keyword`).pipe(map(res => res.topkeyword));
  }

}
