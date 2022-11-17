import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '@models/song';
import { imgNotFound } from '@constants/utils';

@Component({
  selector: 'app-song-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {
  @Input() item: Song;
  @Input() index: number;
  @Output() onClick = new EventEmitter<number>();
  name: string;
  imgNotFound = imgNotFound;
  constructor() { }

  ngOnInit(): void {
    this.name = this.item.artists.map((x) => x.name).join(", ")
  }

  handleClick(index: number) {
    this.onClick.emit(index);
  }


}
