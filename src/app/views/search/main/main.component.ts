import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from '@services/artist.service';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { SearchService } from '@services/search.service';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  searchText: string = '';
  trendingArtists: any;
  trendingKeyword: any;
  longArr = Array.apply(0, Array(8))
  skeletonArr = Array.apply(0, Array(2));
  constructor(
    private artistService: ArtistService,
    private searchService: SearchService,
    private notiflixService: NgxNotiflixService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrendingArtists();
    this.getTrendingKeywork();
  }

  async getTrendingArtists() {
    await firstValueFrom(this.artistService.getTrendingArtists().pipe(
      tap(res => {
        this.trendingArtists = res;
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ));
  }

  async getTrendingKeywork() {
    await firstValueFrom(this.searchService.getTopKeyword().pipe(
      tap(res => {
        this.trendingKeyword = res;
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ));
  }

  onSubmit() {
    if (this.searchText.trim()) {
      this.router.navigate(['/search/' + this.searchText]);
    }
  }

}
