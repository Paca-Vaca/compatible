import { ActionReducer, Action } from '@ngrx/store';
import { Table } from '../interfaces';

export type TableState = Table[];

export const SET_DATA = 'table/SET_DATA';
export function setData(data: Table[]): Action {
    return {
        type: SET_DATA,
        payload: data,
    };
}

export function tableReducer(state: TableState, action: Action) {
    switch (action.type) {
        case SET_DATA:
            return action.payload;
        default:
            return state;
    }
}
