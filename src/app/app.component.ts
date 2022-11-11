import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationEnd,
  NavigationStart,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private notiflixService: NgxNotiflixService) { }

  ngOnInit(): void {
    // this.notiflixService.init({
    //   loadingSvgUrl: 'assets/img/loader.svg',
    //   loadingType: 'custom',
    //   okButton: 'Okie',
    // });

    this.router.events.subscribe((evt) => {
      this.navigationInterceptor(evt);
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      this.notiflixService.showLoading();
    }

    if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
      this.notiflixService.hideLoading();
    }
  }
}


