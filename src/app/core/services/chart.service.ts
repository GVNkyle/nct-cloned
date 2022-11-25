import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getChart(){
    return this.http.get(`${this.apiUrl}bxh`);
  }
}
