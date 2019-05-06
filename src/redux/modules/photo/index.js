import * as types from './types';

const initialState = {
    photo: [],
    loading: false
}

const ACTION_HANDLERS = {
    [types.PHOTO_LOADING]: state => {
        return {
            ...state,
            loading: true
        }
    },
    [types.LOAD_PHOTO]: (state, action) => {
        return {
            ...state,
            photo: action.payload,
            loading: false
        }
    }
}

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}