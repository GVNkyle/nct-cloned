import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { ExploreSkeletonComponent } from '@skeletons/explore-skeleton/explore-skeleton.component';
import { ItemComponent } from '@components/item/item.component';
import { BannerSkeletonComponent } from '@skeletons/banner-skeleton/banner-skeleton.component';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    ExploreSkeletonComponent,
    ItemComponent,
    BannerSkeletonComponent
  ]
})
export class TopicsModule { }
