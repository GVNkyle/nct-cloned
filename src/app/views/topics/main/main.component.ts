import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '@models/topics';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { TopicService } from '@services/topic.service';
import { firstValueFrom, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: Topic[] = null;

  constructor(
    private topicService: TopicService,
    private router: Router,
    private notiflixService: NgxNotiflixService

  ) { }

  ngOnInit(): void {
    this.getTopics();
  }

  async getTopics() {
    await firstValueFrom(this.topicService.getTopics().pipe(
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

}
