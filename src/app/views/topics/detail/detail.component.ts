import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { TopicService } from '@services/topic.service';
import { firstValueFrom, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild('desc') descRef: ElementRef<HTMLParagraphElement>
  key: string = '';
  data: any;

  constructor(
    private topicService: TopicService,
    private notiflixService: NgxNotiflixService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getTopicDetail();
  }

  handleShowAll() {
    if (this.descRef.nativeElement.classList.contains('show-all'))
      this.descRef.nativeElement.classList.remove('show-all');
    else
      this.descRef.nativeElement.classList.add('show-all');
  }

  async getTopicDetail() {
    await firstValueFrom(this.topicService.getTopicDetail(this.key).pipe(
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
