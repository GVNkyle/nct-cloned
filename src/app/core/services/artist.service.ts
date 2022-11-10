import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ArtistDetails } from '@models/artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getArtistDetails(key: string): Observable<ArtistDetails> {
    let params = new HttpParams().append('key', key);
    return this.http.get<ArtistDetails>(`${this.apiUrl}artist`, { params });
  }

  getTrendingArtists(){
    return this.http.get(`${this.apiUrl}trendingArtists`);
  }
}
