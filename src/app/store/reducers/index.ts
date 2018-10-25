import { State } from './firebase.reducer';
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import * as fromEvents from './firebase.reducer';

export const reducers: ActionReducerMap<any> = {
    events: fromEvents.reducer,
};
export const getEvents = (state: State) => state.events;
