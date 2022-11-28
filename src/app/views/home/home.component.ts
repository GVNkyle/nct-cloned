import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, firstValueFrom, of, tap } from 'rxjs';
import { BannerComponent } from '@components/banner/banner.component';
import { SliderComponent } from '@components/slider/slider.component';
import { WrapSongComponent } from '@components/wrap-song/wrap-song.component';
import { HomeData } from '@models/home';
import { HomeService } from '@services/home.service';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { BannerSkeletonComponent } from '@skeletons/banner-skeleton/banner-skeleton.component';
import { SliderSkeletonComponent } from '@skeletons/slider-skeleton/slider-skeleton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    SliderComponent,
    WrapSongComponent,
    BannerSkeletonComponent,
    SliderSkeletonComponent
  ]
})
export class HomeComponent implements OnInit {
  data: HomeData = null;
  constructor(
    private homeService: HomeService,
    private notiflixService: NgxNotiflixService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  async getHomeData() {
    await firstValueFrom(this.homeService.getHome().pipe(
      tap(res => {
        this.data = res;
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ));
  }

}
