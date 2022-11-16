import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
// import Swiper core and required modules
import Swiper, { Autoplay, Navigation, SwiperOptions } from 'swiper';

Swiper.use([Autoplay, Navigation])

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() banners: any[] = [];
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    autoplay: true,
    loop: true,
  };
  constructor() { }

  ngOnInit(): void {
  }
}
