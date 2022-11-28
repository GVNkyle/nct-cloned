import { Artist } from "./artist";
import { SongRankingDetail } from "./song";


export interface Ranking {
  song: SongRankingDetail[];
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

export interface Keyword {
  name: string;
  order: number
}

export interface RefMapping {
  refKey: string;
  refType: string;
}