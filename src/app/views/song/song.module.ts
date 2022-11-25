import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { DetailSkeletonComponent } from '@skeletons/detail-skeleton/detail-skeleton.component';
import { ExploreComponent } from '@components/explore/explore.component';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    DetailSkeletonComponent,
    ExploreComponent
  ]
})
export class SongModule { }
