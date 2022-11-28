import { Artist } from "./artist";

export interface PlaylistDetail {
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
    refMapping: any[];
    genreKey: string;
    songs?: any;
    videos?: any;
    description: string;
    dateModify: string;
    listTag: any[];
    numOfItems: number;
}

export interface Playlist {
    playlist: PlaylistDetail[];
    total: number;
}