import { Artist } from "./artist";

export interface Song {
    title: string;
    thumbnail: string;
    artists: Artist[];
    key: string;
}