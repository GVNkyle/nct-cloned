import { createReducer, on } from '@ngrx/store';
import { setUser } from './auth.actions';

export interface UserState {
    currentUser: any
}

export const initialState: UserState = {
    currentUser: null
}

export const authReducer = createReducer(
    initialState,
    on(setUser, (state, { payload }) => ({ ...state, currentUser: payload }))
)