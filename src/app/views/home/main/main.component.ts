import { Component, OnInit } from '@angular/core';
import { HomeData } from '@models/home';
import { HomeService } from '@services/home.service';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: HomeData;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  async getHomeData(){
    await firstValueFrom(this.homeService.getHome().pipe(
      tap(res => {
        this.data = res;
      }),
      catchError(() => {
        return of(null)
      })
    ));
  }

}
