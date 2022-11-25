import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-song-item-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-item-skeleton.component.html',
  styleUrls: ['./song-item-skeleton.component.scss']
})
export class SongItemSkeletonComponent {

  constructor() { }

}
