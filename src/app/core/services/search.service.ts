import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

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

}
