import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { catchError, firstValueFrom, of, tap } from 'rxjs';
import { ExploreService } from '@services/explore.service';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { ExploreSkeletonComponent } from '../../loading-skeleton/explore-skeleton/explore-skeleton.component';
import { ItemComponent } from '@components/item/item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, ExploreSkeletonComponent, ItemComponent],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  @Input() type: "song" | "playlist" | "mv";
  @Input() name: "Bài Hát" | "Playlist" | "MV";
  @Input() ratio?: string = "1/1";
  data: any = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  constructor(
    private exploreService: ExploreService, 
    private notiflixService: NgxNotiflixService,
    private router: Router) { }

  ngOnInit(): void {
    this.getExplore();
  }

  async getExplore() {
    await firstValueFrom(this.exploreService.getExplore(this.pageNumber, this.type).pipe(
      tap((res) => {
        this.data = [...this.data, ...res];
      }),
      catchError(() => {
        this.notiflixService.error('Oops! Something error happened!');
        this.router.navigate(['/error']);
        return of(null);
      })
    ))
  }

  onScroll() {
    this.pageNumber = this.pageNumber + 1;
    this.getExplore();
  }

}
