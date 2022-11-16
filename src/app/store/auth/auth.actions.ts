import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[FirebaseAuth] SetUser', props<{ payload: any }>());