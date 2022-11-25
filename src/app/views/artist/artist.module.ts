import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { ExploreSkeletonComponent } from '@skeletons/explore-skeleton/explore-skeleton.component';
import { BannerSkeletonComponent } from '@skeletons/banner-skeleton/banner-skeleton.component';
import { SliderSkeletonComponent } from '@skeletons/slider-skeleton/slider-skeleton.component';
import { ListSongSkeletonComponent } from '@skeletons/list-song-skeleton/list-song-skeleton.component';
import { SliderComponent } from '@components/slider/slider.component';
import { WrapSongComponent } from '@components/wrap-song/wrap-song.component';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    ExploreSkeletonComponent,
    BannerSkeletonComponent,
    SliderSkeletonComponent,
    ListSongSkeletonComponent,
    SliderComponent,
    WrapSongComponent
  ]
})
export class ArtistModule { }
