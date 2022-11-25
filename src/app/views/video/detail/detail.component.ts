import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgNotFound } from '@constants/utils';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { VideoService } from '@services/video.service';
import { firstValueFrom, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data: any;
  key: string = '';
  artistName: string = '';
  imgNotFound = imgNotFound;
  constructor(
    private videoService: VideoService,
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getVideoDetail();
  }

  async getVideoDetail() {
    await firstValueFrom(this.videoService.getVideoDetail(this.key).pipe(
      tap(res => {
        this.data = res;
        console.log(res);
        this.data?.video?.artists?.map((item: any) => {
          item.link = item.shortLink ? `/artist/${item.shortLink}` : "#"
        });
        this.artistName = this.data?.video?.artists
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
