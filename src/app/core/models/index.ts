import { Artist } from "./artist";

export interface RefMapping {
  refKey: string;
  refType: string;
}

export interface Song {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist[];
  type: string;
  dateRelease: any;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: RefMapping[];
  genreKey: string;
  streamUrls: any[];
  description?: any;
}

export interface NewRelease {
  song: Song[];
  playlist: any[];
}

export interface Song2 {
  title: string;
  position: number;
  oldPosition: number;
  highestPosition: number;
  totalWeekInRanked: number;
  thumbnail: string;
  artists: Artist[];
  songKey: string;
  viewIn24H?: any;
  duration: number;
}

export interface Ranking {
  song: Song2[];
  week: number;
  year: number;
  key: string;
}

export interface Showcase {
  title: string;
  key: string;
  thumbnail: string;
  url: string;
  description: string;
  order: number;
  imageUrl: string;
}

export interface Top100 {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist[];
  type: string;
  dateRelease: number;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  refMapping: any[];
  genreKey: string;
  songs?: any;
  videos?: any;
  description: string;
  dateModify: string;
  listTag: any[];
  numOfItems: number;
}

export interface ListPlaylist {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist[];
  type: string;
  dateRelease: number;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  refMapping: any[];
  genreKey: string;
  songs?: any;
  videos?: any;
  description: string;
  dateModify: string;
  listTag: any[];
  numOfItems: number;
}

export interface TopicEvent {
  groupName: string;
  listPlaylist: ListPlaylist[];
}

export interface Video {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist[];
  type: string;
  dateRelease: any;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: any[];
  genreKey: string;
  streamUrls: any[];
}
