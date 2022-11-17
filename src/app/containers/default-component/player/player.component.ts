import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { imgNotFound, addMusicFromLocal } from '@constants/utils';
import { Song, songStoreItem } from '@models/song';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { DestroyService } from '@services/destroy.service';
import { SongService } from '@services/song.service';
import { setCurrentIndex } from '@stores/player/player.actions';
import { setPlayer } from '@stores/menu/menu.actions';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { CURRENT_INDEX, LIST_SONG, VOLUME } from '@constants/local-storage';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [DestroyService]
})
export class PlayerComponent implements OnInit {
  @ViewChild('audioRef') audioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('progressRef') progressRef: ElementRef<HTMLDivElement>;
  songIds: Song[] = [];
  currentIndex: number = 0;
  artist: any;
  data: any;
  player: boolean;
  imgNotFound = imgNotFound;
  songs: songStoreItem[] = [];
  //local state
  isShowListSong: boolean = false;
  isPlaying: boolean = false;

  // for player controller
  isKeyMatching: boolean = false;
  // time
  currentTime: number = 0;
  duration: number = 0;
  // volume
  volume: number = Number(JSON.parse(localStorage.getItem(VOLUME) as any)) || 100;
  volumePrev: number = 0;

  constructor(
    private store: Store<{ menu, player, music }>,
    private songService: SongService,
    private destroyService: DestroyService,
    private notiflixService: NgxNotiflixService
  ) { }

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer() {
    this.store.select('music').subscribe(state => this.songs = state.songs);
    this.store.select('player').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => {
      this.currentIndex = state.currentIndex;
      this.songIds = state.songIds;
      this.songIds = this.songIds.map((item) => ({ ...item, artistName: item.artists.map((item) => item.name).join(", ") }));
      localStorage.setItem(CURRENT_INDEX, JSON.stringify(this.currentIndex));
      localStorage.setItem(LIST_SONG, JSON.stringify(this.songIds));
      this.getSong();
      this.isKeyMatching = this.songs?.some((item) => item.key === this.songIds[this.currentIndex].key);
    });
    this.store.select('menu').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => this.player = state.player);
  }

  getSong() {
    const songKey = this.songIds && this.songIds[this.currentIndex]?.key;
    if (this.songIds && songKey) {
      this.songService.getSong(songKey).subscribe(
        (res) => {
          this.data = res;
          if (!this.data) {
            this.audioRef.nativeElement.pause();
          }
          this.artist = this.data?.song?.artists?.map((item: any) => item.name).join(", ");
          this.checkSong();
        }
      );
    }
  }

  checkSong() {
    if (this.data?.song?.streamUrls?.length === 0) {
      this.notiflixService.error('Không tìm thấy bài hát!');
      if (this.currentIndex !== this.songIds.length - 1) {
        this.store.dispatch(setCurrentIndex({ currentIndex: this.currentIndex + 1 }));
      }
    } else {
      this.autoPlaySong();
      setTimeout(() => this.setSongDuration(), 3200);
      this.addMusicFromLocal();
    }
  }

  setSongDuration() {
    if (this.audioRef.nativeElement) {
      this.duration = this.audioRef.nativeElement.duration;
    }
  }

  autoPlaySong() {
    if (this.audioRef.nativeElement && this.songIds && this.data?.song?.streamUrls) {
      this.audioRef.nativeElement.src = this.data?.song?.streamUrls[0]?.streamUrl;
      this.audioRef.nativeElement.play();
    }
  }

  addMusicFromLocal() {
    if (this.songIds[this.currentIndex] && this.songIds[this.currentIndex].key) {
      addMusicFromLocal(this.songIds[this.currentIndex]);
    }
  }

  onClickSetPlayer() {
    if (!this.player)
      this.setPlayer();
  }

  setPlayer() {
    this.store.dispatch(setPlayer());
  }

  setCurrentIndex(index: number) {
    this.store.dispatch(setCurrentIndex({ currentIndex: index }));
  }

  handlePrevSong() {
    this.store.dispatch(setCurrentIndex({
      currentIndex: this.currentIndex <= 0 ? this.songIds.length - 1 : this.currentIndex - 1
    }));
  }

  handlePlayPause() {
    if (this.isPlaying) {
      this.audioRef.nativeElement.pause();
      this.isPlaying = false;
    } else {
      this.audioRef.nativeElement.play();
      this.isPlaying = true;
    }
  }

  handleNextSong() {
    this.store.dispatch(setCurrentIndex({
      currentIndex: this.currentIndex >= this.songIds.length - 1 ? 0 : this.currentIndex + 1
    }))
  }

  handleSeekTime(e: any) {
    const clientX = e.clientX;
    const left = this.progressRef.nativeElement?.getBoundingClientRect().left;
    const width = this.progressRef.nativeElement?.getBoundingClientRect().width;
    const max = width + left;
    const min = left;
    if (clientX >= max) {
      this.audioRef.nativeElement.currentTime = this.audioRef.nativeElement.duration;
      this.currentTime = this.audioRef.nativeElement.duration;
    }

    if (clientX <= min) {
      this.audioRef.nativeElement.currentTime = 0;
      this.currentTime = 0;
    }

    if (clientX <= max && clientX >= min) {
      const percent = Math.round((clientX - left) / width);
      this.audioRef.nativeElement.currentTime = this.audioRef.nativeElement.duration * percent;
      this.currentTime = this.audioRef.nativeElement.duration * percent;
    }
  }

  setVolume() {
    if (Number(this.volume) === 0) {
      if (this.volumePrev) {
        this.volume = this.volumePrev;
      }
    } else {
      this.volumePrev = this.volume;
      this.volume = 0;
    }
  }

  changeVolume() {
    if (this.audioRef.nativeElement) {
      this.audioRef.nativeElement.volume = Number(this.volume) / 100;
      localStorage.setItem(VOLUME, JSON.stringify(this.volume));
    }
  }

  toggleListSong() {
    this.isShowListSong = !this.isShowListSong;
  }

  setPlaying(value: boolean) {
    this.isPlaying = value;
  }

  handleAddSongFavorite() {
    // do something later
  }

  handleAudioEnded() {
    this.handleNextSong();
  }

  handleAudioUpdate() {
    if (this.audioRef.nativeElement) {
      this.currentTime = this.audioRef.nativeElement.currentTime;
    }
  }

  registerMouseEvent() {
    this.progressRef.nativeElement.addEventListener('mousedown', () => {
      window.addEventListener('mousemove', this.handleSeekTime);
    })

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.handleSeekTime);
    })
  }

  ngOnDestroy() {
    window.removeEventListener("mouseup", () => {
      window.removeEventListener("mousemove", this.handleSeekTime);
    });
  }
}
