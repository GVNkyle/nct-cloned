import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ExploreComponent } from '@components/explore/explore.component';
import { DetailSkeletonComponent } from '@skeletons/detail-skeleton/detail-skeleton.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    DetailSkeletonComponent,
    ExploreComponent
  ]
})
export class VideoModule { }
