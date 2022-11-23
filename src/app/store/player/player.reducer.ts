import { createReducer, on } from '@ngrx/store';
import { setSongId, setCurrentIndex, setSongAndIndex } from './player.actions';
import { LIST_SONG, CURRENT_INDEX } from '@constants/local-storage';
import { Song } from '@models/song';
export interface PlayerState {
    songIds: Song[]
    currentIndex: number;
}

export const initialState: PlayerState = {
    songIds: JSON.parse(localStorage.getItem(LIST_SONG) as any) || [],
    currentIndex: JSON.parse(localStorage.getItem(CURRENT_INDEX) as any) || 0,
}

export const playerReducer = createReducer(
    initialState,
    on(setSongId, (state, { songIds }) => ({ ...state, songIds })),
    on(setCurrentIndex, (state, { currentIndex }) => ({ ...state, currentIndex })),
    on(setSongAndIndex, (state, { currentIndex, songIds }) => ({ ...state, currentIndex, songIds }))
);