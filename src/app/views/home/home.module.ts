import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { BannerComponent } from '@components/banner/banner.component';
import { SliderComponent } from '@components/slider/slider.component';
import { WrapSongComponent } from '@components/wrap-song/wrap-song.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerComponent,
    SliderComponent,
    WrapSongComponent
  ]
})
export class HomeModule { }
