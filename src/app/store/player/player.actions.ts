import { Song } from '@models/song';
import { createAction, props } from '@ngrx/store';

export const setSongId = createAction('[Player] SetSongId', props<{ songIds: Song[] }>());
export const setCurrentIndex = createAction('[Player] SetCurrentIndex', props<{ currentIndex: number }>());
export const setSongAndIndex = createAction('[Player] SetSongAndIndex', props<{ songIds: Song[], currentIndex: number }>());