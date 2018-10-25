import * as EventActions from '../actions';

// Define state
export interface State {
    events: any;
}
// Define initial state
const initialState: State = {
    events: []
};
// reducer function
export function reducer(state = initialState,
    action: EventActions.Actions): State {
    switch (action.type) {
        case EventActions.FETCH_EVENTS: {
            return {
                ...state,
            };
        }
        case EventActions.FETCH_EVENTS_SUCCESS: {
            return {
                events: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
