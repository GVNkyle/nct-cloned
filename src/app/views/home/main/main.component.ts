import { Component, OnInit } from '@angular/core';
import { HomeData } from '@models/home';
import { HomeService } from '@services/home.service';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: HomeData;
  constructor(private homeService: HomeService, private notiflixService: NgxNotiflixService) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  async getHomeData() {
    this.notiflixService.showBlock(document.querySelectorAll('#container'));
    await firstValueFrom(this.homeService.getHome().pipe(
      tap(res => {
        this.data = res;
        this.notiflixService.hideBlock(document.querySelectorAll('#container'));
      }),
      catchError(() => {
        this.notiflixService.hideBlock(document.querySelectorAll('#container'));
        this.notiflixService.error('Oops! Something error happened!');
        return of(null);
      })
    ));
  }

}
