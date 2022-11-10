import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getExplore(page: number = 1, type: "song" | "playlist" | "mv" = "song") {
    let params = new HttpParams().append('type', type).append('page', page);
    return this.http.get(`${this.apiUrl}explore`, { params });
  }

  getExploreArtists(gender: number) {
    let params = new HttpParams().append('gender', gender);
    return this.http.get(`${this.apiUrl}exploreArtists`, { params });
  }
}
