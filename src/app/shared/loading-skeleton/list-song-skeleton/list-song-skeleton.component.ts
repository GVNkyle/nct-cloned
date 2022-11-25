import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongItemSkeletonComponent } from '../song-item-skeleton/song-item-skeleton.component';

@Component({
  selector: 'app-list-song-skeleton',
  standalone: true,
  imports: [CommonModule,SongItemSkeletonComponent],
  templateUrl: './list-song-skeleton.component.html',
  styleUrls: ['./list-song-skeleton.component.scss']
})
export class ListSongSkeletonComponent {

  constructor() { }
}
