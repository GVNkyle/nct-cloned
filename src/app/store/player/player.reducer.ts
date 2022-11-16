import { createReducer, on } from '@ngrx/store';
import { setSongId, setCurrentIndex } from './player.actions';

export const initialState = {
    songIds: JSON.parse(localStorage.getItem("NCT_List_Song") as any) || [],
    currentIndex: JSON.parse(localStorage.getItem("NCT_Current_Index") as any) || 0,
}

export const playerReducer = createReducer(
    initialState,
    on(setSongId, (state, { songIds }) => ({ ...state, songIds: songIds })),
    on(setCurrentIndex, (state, { currentIndex }) => ({ ...state, currentIndex: currentIndex })),
);