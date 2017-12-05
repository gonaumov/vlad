import * as types from '../constants/ActionTypes';

import { stateArg } from '../common/types';

const index = (state: stateArg, action = { type: '' }) => {
    switch (action.type) {
        case types.NEXT_ITEM:
            if (state.activeIndex < (state.items.length - 1)) {
                let nextIndex = state.activeIndex + 1;
                return {
                    activeIndex: nextIndex,
                    items: [...state.items],
                    previousEnabled: true,
                    nextEnabled: (state.items.length-1) > nextIndex
                };
            }
            return {
                ...state,
                previousEnabled: state.activeIndex > 0,
                nextEnabled: (state.items.length - 1) > state.activeIndex
            };
        case types.PREVIOUS_ITEM:
            if (state.activeIndex > 0) {
                let nextIndex = state.activeIndex - 1;
                return {
                    activeIndex: nextIndex,
                    items: [...state.items],
                    previousEnabled: (nextIndex != 0),
                    nextEnabled: (state.items.length) > nextIndex
                };
            }

            return {
                ...state,
                previousEnabled: state.activeIndex != 0,
                nextEnabled: state.items.length > state.activeIndex
            };
        default:
            return state;
    }
};

export const getActiveItem = (state: stateArg) => {
    return state.items[state.activeIndex];
};

export default index;