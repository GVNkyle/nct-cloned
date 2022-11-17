import { createReducer, on } from '@ngrx/store';
import { setUser } from './auth.actions';

export const initialState = {
    currentUser: undefined
}

export const authReducer = createReducer(
    initialState,
    on(setUser, (state, { payload }) => ({ ...state, currentUser: payload }))
)