import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HomeData } from '@models/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getHome():Observable<HomeData>{
    return this.http.get<HomeData>(`${this.apiUrl}home`);
  }
}
