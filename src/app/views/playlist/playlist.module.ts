import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { WrapSongComponent } from '@components/wrap-song/wrap-song.component';
import { DetailSkeletonComponent } from '@skeletons/detail-skeleton/detail-skeleton.component';
import { ExploreComponent } from '@components/explore/explore.component';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    WrapSongComponent,
    DetailSkeletonComponent,
    ExploreComponent
  ]
})
export class PlaylistModule { }
