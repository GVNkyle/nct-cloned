import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgNotFound } from '@constants/utils';
import { ArtistService } from '@services/artist.service';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data: any;
  shortLink: string = '';
  imgNotFound = imgNotFound;
  constructor(
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService,
  ) { }

  ngOnInit(): void {
    this.shortLink = this.route.snapshot.paramMap.get('shortLink');
    this.getArtistDetail();
  }

  async getArtistDetail() {
    await firstValueFrom(this.artistService.getArtistDetails(this.shortLink).pipe(
      tap(res => {
        this.data = res;
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ))
  }

}
