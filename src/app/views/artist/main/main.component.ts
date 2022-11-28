import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { imgNotFound } from '@constants/utils';
import { Artist } from '@models/artist';
import { ExploreService } from '@services/explore.service';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  gender: number = 0;
  data: Artist[] = null;
  imgNotFound = imgNotFound;
  constructor(
    private exploreService: ExploreService,
    private router: Router,
    private notiflixService: NgxNotiflixService
  ) { }

  ngOnInit(): void {
    this.getArtist();
  }

  async getArtist() {
    await firstValueFrom(this.exploreService.getExploreArtists(this.gender).pipe(
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
  changeGender(type: number) {
    this.gender = type;
    this.data = null;
    this.getArtist();
  }
}
