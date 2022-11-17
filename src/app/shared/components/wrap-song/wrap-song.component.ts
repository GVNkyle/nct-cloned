import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '@models/song';
import { Store } from '@ngrx/store';
import { SongItemComponent } from '@components/song-item/song-item.component';
import { setPlayer } from '@stores/menu/menu.actions';
import { setSongAndIndex } from '@stores/player/player.actions';

@Component({
  selector: 'app-wrap-song',
  standalone: true,
  imports: [CommonModule, SongItemComponent],
  templateUrl: './wrap-song.component.html',
  styleUrls: ['./wrap-song.component.scss'],
})
export class WrapSongComponent implements OnInit {
  @Input() songs: Song[] = [];
  constructor(
    private store: Store<{ player, menu }>
  ) { }

  ngOnInit(): void {
  }

  handleClick(index: number) {
    this.store.dispatch(setPlayer());
    this.store.dispatch(setSongAndIndex({ currentIndex: index, songIds: this.songs }));
  }

}
