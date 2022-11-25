import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { SongItemSkeletonComponent } from '@skeletons/song-item-skeleton/song-item-skeleton.component';
import { BannerComponent } from '@components/banner/banner.component';
import { setPlayer } from '@stores/menu/menu.actions';
import { setSongAndIndex } from '@stores/player/player.actions';
import { ChartService } from '@services/chart.service';
import { firstValueFrom, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    CommonModule,
    SongItemSkeletonComponent,
    BannerComponent,
    RouterModule
  ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: any;
  longArr = Array.apply(0, Array(10));
  constructor(
    private store: Store<{ menu, player }>,
    private chartService: ChartService,
    private notiflixService: NgxNotiflixService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getChart();
  }

  handlePlayAll(index: number) {
    if (this.data) {
      const _songIds = this.data?.ranking?.song?.map((item: any) => ({
        title: item.title,
        thumbnail: item.thumbnail,
        artists: item.artists,
        key: item.songKey,
      }))
      this.store.dispatch(setPlayer());
      this.store.dispatch(setSongAndIndex({ currentIndex: index, songIds: _songIds }));
    }
  }

  async getChart(){
    await firstValueFrom(this.chartService.getChart().pipe(
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
