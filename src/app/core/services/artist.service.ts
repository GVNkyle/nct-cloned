import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ArtistDetails, TrendingArtists } from '@models/artist';
import { HttpReceived } from '@models/http-received';
import { map, Observable } from 'rxjs';

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

  getTrendingArtists(): Observable<TrendingArtists[]> {
    return this.http.get<HttpReceived>(`${this.apiUrl}trendingArtists`).pipe(map(res => res.artistTrending));
  }
}
