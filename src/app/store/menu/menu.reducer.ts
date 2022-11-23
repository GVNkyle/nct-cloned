import { createReducer, on } from '@ngrx/store';
import { setMenu, setPlayer, close } from './menu.actions';
export interface MenuState  {
    player: boolean,
    menu: boolean,
}

export const initialState: MenuState = {
    player: false,
    menu: false,
};

export const menuReducer = createReducer(
    initialState,
    on(setMenu, (state) => {
        if (state.player) {
            return {
                menu: !state.menu,
                player: false
            }
        }
        return {
            ...state,
            menu: !state.menu
        }
    }),
    on(setPlayer, (state) => {
        if (state.menu) {
            return {
                menu: false,
                player: !state.player,
            };
        }

        return {
            ...state,
            player: !state.player,
        };
    }),
    on(close, (state) => ({ menu: false, player: false }))
);