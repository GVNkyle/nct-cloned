import { RefMapping } from ".";
import { Artist } from "./artist";

export interface Song {
    title: string;
    thumbnail: string;
    artists: Artist[];
    key: string;
    artistName?: string;
}

export interface songStoreItem extends Song {
    uid: string;
}

export interface ListSong {
    song: SongDetail[];
    total: number;
}

export interface SongDetail {
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

export interface SongRankingDetail {
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
    artistName: string;
}
