import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { imgNotFound, addMusicFromLocal } from '@constants/utils';
import { Song, SongDetail, songStoreItem } from '@models/song';
import { Store } from '@ngrx/store';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { takeUntil, tap } from 'rxjs';
import { DestroyService } from '@services/destroy.service';
import { SongService } from '@services/song.service';
import { setCurrentIndex } from '@stores/player/player.actions';
import { setPlayer } from '@stores/menu/menu.actions';
import { addSong, deleteSong, setSongs } from '@stores/music/music.actions';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { CURRENT_INDEX, LIST_SONG, VOLUME } from '@constants/local-storage';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [DestroyService]
})
export class PlayerComponent implements OnInit, OnDestroy {
  @ViewChild('audioRef') audioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('progressRef') progressRef: ElementRef<HTMLDivElement>;
  songIds: Song[] = [];
  currentIndex: number = 0;
  artist: string = '';
  data: SongDetail = null;
  player: boolean;
  imgNotFound = imgNotFound;
  songs: songStoreItem[] = [];
  //local state
  isShowListSong: boolean = false;
  isPlaying: boolean = false;

  // for player controller
  isFavorite: boolean = false;
  // time
  currentTime: number = 0;
  duration: number = 0;
  // volume
  volume: number = Number(JSON.parse(localStorage.getItem(VOLUME) as any)) || 100;
  volumePrev: number = 0;

  currentUser: any;

  constructor(
    private store: Store<{ menu, player, music, auth }>,
    private songService: SongService,
    private destroyService: DestroyService,
    private notiflixService: NgxNotiflixService,
    public afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.initPlayer();
    this.getFavoriteSong();
  }

  initPlayer() {
    this.store.select('music').subscribe(state => {
      this.songs = state.songs;
      this.isFavorite = this.songs?.some((item) => item.key === this.songIds[this.currentIndex].key);
    });
    this.store.select('player').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => {
      this.currentIndex = state.currentIndex;
      this.songIds = state.songIds;
      this.songIds = this.songIds.map((item) => ({ ...item, artistName: item.artists.map((item) => item.name).join(", ") }));
      localStorage.setItem(CURRENT_INDEX, JSON.stringify(this.currentIndex));
      localStorage.setItem(LIST_SONG, JSON.stringify(this.songIds));
      this.getSong();
      this.isFavorite = this.songs?.some((item) => item.key === this.songIds[this.currentIndex].key);
    });
    this.store.select('menu').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => this.player = state.player);
    this.store.select('auth').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => this.currentUser = state.currentUser);
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
          this.artist = this.data?.artists?.map((item: any) => item.name).join(", ");
          this.checkSong();
        }
      );
    }
  }

  checkSong() {
    if (this.data?.streamUrls?.length === 0) {
      this.notiflixService.error('Không tìm thấy bài hát!');
      if (this.currentIndex !== this.songIds.length - 1) {
        this.store.dispatch(setCurrentIndex({ currentIndex: this.currentIndex + 1 }));
      }
    } else {
      this.autoPlaySong();
      this.addMusicFromLocal();
    }
  }

  autoPlaySong() {
    if (this.audioRef.nativeElement && this.songIds && this.data?.streamUrls) {
      this.audioRef.nativeElement.src = this.data?.streamUrls[0]?.streamUrl;
      this.audioRef.nativeElement.play();
      this.audioRef.nativeElement.addEventListener('canplaythrough', () => {
        this.duration = this.audioRef.nativeElement.duration;
      });
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

  handleSeekTime = (e: any) => {
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
      const percent = (clientX - left) / width;
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
    this.changeVolume();
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

  async handleAddSongFavorite() {
    if (!this.currentUser) {
      return this.notiflixService.error('Cần đăng nhập để dùng tính năng này!');
    }
    const checkExists = this.songs.find((item) => item.key === this.songIds[this.currentIndex].key);
    if (!checkExists) {
      try {
        const doc = await this.afs.doc(`favorite/${this.songIds[this.currentIndex].key}`).set({ ...this.songIds[this.currentIndex], uid: this.currentUser.uid });
        this.store.dispatch(addSong({ song: { ...this.songIds[this.currentIndex], uid: this.currentUser.uid } }));
      }
      catch (error) {
        this.notiflixService.error('Thêm bài hát vào danh sách yêu thích thất bại!');
      }
    } else {
      const doc: AngularFirestoreDocument<any> = this.afs.doc(`favorite/${checkExists.key}`)
      doc.delete().then(() => this.store.dispatch(deleteSong({ song: checkExists })));
    }
  }

  handleAudioEnded() {
    this.handleNextSong();
  }

  handleAudioUpdate() {
    if (this.audioRef.nativeElement) {
      this.currentTime = this.audioRef.nativeElement.currentTime;
    }
  }

  //kéo thả thanh Progress
  registerEvent(event: any) {
    window.addEventListener('mousemove', this.handleSeekTime, false);
  }

  @HostListener('mouseup', ['$event'])
  removeMouseMove(event: any) {
    window.removeEventListener('mousemove', this.handleSeekTime, false);
  }

  // after F5/Refresh/Restart songs store lost state, get from firestore
  getFavoriteSong() {
    let collections = this.afs.collection('favorite').valueChanges();
    if (this.songs.length === 0) {
      collections.pipe(takeUntil(this.destroyService.destroys$)).subscribe(res => {
        if (res) {
          this.store.dispatch(setSongs({ newSong: <songStoreItem[]>res }))
        }
      })
    }
  }

  ngOnDestroy() {
    window.removeEventListener('mouseup', () => {
      window.removeEventListener("mousemove", this.handleSeekTime, false);
    });
  }

}
