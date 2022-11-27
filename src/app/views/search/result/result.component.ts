import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { SearchService } from '@services/search.service';
import { firstValueFrom, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  key: string = '';
  data: any;
  constructor(
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('name');
    this.search();
  }

  async search(){
    await firstValueFrom(this.searchService.searchKeyword(this.key).pipe(
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
