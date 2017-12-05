import {
    CHANGE_ACTIVE_ITEM
} from '../constants/ActionTypes'


const INITIAL_STATE = {
    activeIndex: 0,
    items: [1,2,3]
}

const index = (state =  INITIAL_STATE, action = { type: '' }) => {
    if (!action) {
        return state;
    }

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

export default index