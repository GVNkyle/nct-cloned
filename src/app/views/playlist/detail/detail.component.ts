import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  data: any;
  artistName: string = '';
  constructor(
    private playlistService: PlaylistService,
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getPlaylistDetail();
  }

  async getPlaylistDetail() {
    this.notiflixService.showBlock(document.querySelectorAll('#container'));
    await firstValueFrom(this.playlistService.getPlaylistDetail(this.key).pipe(
      tap(res => {
        this.data = res;
        this.data?.playlist?.artists?.map((item: any) => {
          item.link = item.shortLink ? `/artist/${item.shortLink}` : "#"
        });
        this.artistName = this.data?.playlist?.artists
          ?.map((item: any) => item.name)
          .join(", ");
        this.notiflixService.hideBlock(document.querySelectorAll('#container'));
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.notiflixService.hideBlock(document.querySelectorAll('#container'));
        return of(null);
      })
    ))
  }

}
