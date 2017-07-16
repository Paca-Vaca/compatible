import { ActionReducer, Action } from '@ngrx/store';

export interface LayoutState {
    loaderVisible: boolean;
}

export const SHOW_LOADER = 'layout/SHOW_LOADER';
export function show(): Action {
    return { type: SHOW_LOADER };
}

export const HIDE_LOADER = 'layout/HIDE_LOADER';
export function hide(): Action {
    return { type: HIDE_LOADER };
}

export function layoutReducer(state: LayoutState, action: Action) {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loaderVisible: true };
        case HIDE_LOADER:
            return { ...state, loaderVisible: false };
        default:
            return state;
    }
}
