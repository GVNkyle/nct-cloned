import { songStoreItem } from '@models/song';
import { createReducer, on } from '@ngrx/store';
import { addSong, setSongs, deleteSong } from './music.actions';

export interface MusicState{
    songs: songStoreItem[]
}

export const initialState: MusicState = {
    songs: []
}

export const musicReducer = createReducer(
    initialState,
    on(addSong, (state, { song }) => ({ songs: [...state.songs, song] })),
    on(setSongs, (state, { newSong }) => ({ songs: newSong })),
    on(deleteSong, (state, { song }) => ({ songs: state.songs.filter((item) => item.key !== song.key) }))
);