import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSongSkeletonComponent } from '../list-song-skeleton/list-song-skeleton.component';

@Component({
  selector: 'app-detail-skeleton',
  standalone: true,
  imports: [CommonModule,ListSongSkeletonComponent],
  templateUrl: './detail-skeleton.component.html',
  styleUrls: ['./detail-skeleton.component.scss']
})
export class DetailSkeletonComponent{

  constructor() { }
}
