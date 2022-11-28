import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpReceived } from '@models/http-received';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getChart() {
    return this.http.get<HttpReceived>(`${this.apiUrl}bxh`).pipe(map(res => res.ranking))
  }
}
