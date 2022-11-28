import { RefMapping } from ".";
import { Artist } from "./artist";

export interface VideoDetail {
    key: string;
    title: string;
    thumbnail: string;
    duration: string;
    artists: Artist[];
    type: string;
    dateRelease: number;
    dateCreate: number;
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
}

export interface Video {
    total: number;
    video: Video[];
}