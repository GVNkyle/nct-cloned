import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '@models/song';
import { getMusicFromLocal } from '@constants/utils';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { WrapSongComponent } from '@components/wrap-song/wrap-song.component';
import { HISTORY } from '@constants/local-storage';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, WrapSongComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  historyMusic: Song[] = getMusicFromLocal();
  constructor(
    private notiflixService: NgxNotiflixService
  ) { }
  handleDeleteHistory() {
    if (this.historyMusic.length !== 0) {
      this.notiflixService.confirm('Cảnh báo!!', 'Bạn có chắc muốn xóa lịch sử nghe không!', () => {
        localStorage.setItem(HISTORY, JSON.stringify([]));
        this.historyMusic = [];
      })
    }
  }

}
