import { songStoreItem } from '@models/song';
import { createAction, props } from '@ngrx/store';

export const addSong = createAction('[Music] AddSong', props<{ song: songStoreItem }>());
export const setSongs = createAction('[Music] SetSongs', props<{ newSong: songStoreItem[] }>());
export const deleteSong = createAction('[Music] DeleteSong', props<{ song: songStoreItem }>());