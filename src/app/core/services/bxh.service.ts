import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class BxhService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getBXH(){
    return this.http.get(`${this.apiUrl}bxh`);
  }
}
