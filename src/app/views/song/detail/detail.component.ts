import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgNotFound } from '@constants/utils';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { SongService } from '@services/song.service';
import { firstValueFrom, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  key: string = '';
  data: any;
  artistName: string = '';
  lyric: any;
  imgNotFound = imgNotFound;
  constructor(
    private songService: SongService,
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.key = this.route.snapshot.paramMap.get('key');
    await this.getSong();
    await this.getLyric();
  }

  async getSong() {
    await firstValueFrom(this.songService.getSong(this.key).pipe(
      tap(res => {
        this.data = res;
        this.data?.artists?.map((item: any) => {
          item.link = item.shortLink ? `/artist/${item.shortLink}` : "#"
        });
        this.artistName = this.data?.artists
          ?.map((item: any) => item.name)
          .join(", ");
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ))
  }

  async getLyric() {
    await firstValueFrom(this.songService.getLyric(this.key).pipe(
      tap(res => {
        this.lyric = res;
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ))
  }

}
