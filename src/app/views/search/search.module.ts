import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { TrendingItemComponent } from '@components/trending-item/trending-item.component';
import { ListSongSkeletonComponent } from '@skeletons/list-song-skeleton/list-song-skeleton.component';
import { SliderSkeletonComponent } from '@skeletons/slider-skeleton/slider-skeleton.component';
import { WrapSongComponent } from '@components/wrap-song/wrap-song.component';
import { SliderComponent } from '@components/slider/slider.component';


@NgModule({
  declarations: [
    MainComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    TrendingItemComponent,
    ListSongSkeletonComponent,
    SliderSkeletonComponent,
    WrapSongComponent,
    SliderComponent
  ]
})
export class SearchModule { }
