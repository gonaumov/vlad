import {
    CHANGE_ACTIVE_ITEM
} from '../constants/ActionTypes'

import {stateArg} from '../common/types'

const index = (state: stateArg, action = { type: '' }) => {
    switch (action.type) {
        case CHANGE_ACTIVE_ITEM:
            if (state.activeIndex < (state.items.length - 1)) {
                return {
                    activeIndex: (state.activeIndex + 1),
                    items: [...state.items]
                }
            }
            return {
                activeIndex: 0,
                items: [...state.items]
            }
        default:
            return state;
    }
}

export const getActiveItem = (state: stateArg) => {
   return state.items[state.activeIndex]
}

export default index