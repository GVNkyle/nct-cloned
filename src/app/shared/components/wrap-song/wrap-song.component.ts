import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongItemComponent } from '@components/song-item/song-item.component';
import { Song } from '@models/song';

@Component({
  selector: 'app-wrap-song',
  standalone: true,
  imports: [CommonModule, SongItemComponent],
  templateUrl: './wrap-song.component.html',
  styleUrls: ['./wrap-song.component.scss']
})
export class WrapSongComponent implements OnInit {
  @Input() songs: Song[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(index: number) {
    // do something
  }

}
