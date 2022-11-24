import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule
  ]
})
export class SongModule { }
