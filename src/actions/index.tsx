import * as types from '../constants/ActionTypes'
import { Dispatch } from 'react-redux'

const changeActiveItem = () => (dispatch: Dispatch<{ type: 'string' }>): void => {
    dispatch({
        type: types.NEXT_ITEM
    })
};

export default changeActiveItem; 