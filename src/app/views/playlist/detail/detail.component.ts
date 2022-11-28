import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgNotFound } from '@constants/utils';
import { PlaylistDetail } from '@models/playlist';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { PlaylistService } from '@services/playlist.service';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  key: string = '';
  data: PlaylistDetail = null;
  artistName: string = '';
  imgNotFound = imgNotFound;
  constructor(
    private playlistService: PlaylistService,
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getPlaylistDetail();
  }

  async getPlaylistDetail() {
    await firstValueFrom(this.playlistService.getPlaylistDetail(this.key).pipe(
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

}
