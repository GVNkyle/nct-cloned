import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
// import Swiper core and required modules
import Swiper, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { InnerWidthDirective } from '@directives/inner-width.directive';
import { ItemComponent } from '@components/item/item.component';

Swiper.use([Autoplay, Navigation])

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SwiperModule, InnerWidthDirective, ItemComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() banners: any[] = [];
  @Input() spaceBetween: number = 20;
  @Input() autoplay: boolean = false;
  @Input() ratio: string = "1/1";
  @Input() type: string = "";
  config: SwiperOptions = {
    spaceBetween: this.spaceBetween,
    navigation: true,
    autoplay: this.autoplay,
    loop: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
