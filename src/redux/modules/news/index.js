import * as types from './types';

const initialState = {
    news: [],
    loading: false
}

const ACTION_HANDLERS = {
    [types.NEWS_LOADING]: state => {
        return {
            ...state,
            loading: true
        }
    },
    [types.REMOVE_NEWS]: (state, action) => {
        return [
            ...state.slice(0, action.index), 
            ...state.slice(action.index + 1)
        ]
    },
    [types.ADD_NEWS]: (state, action) => {
        return [
            ...state,
            action.post
        ]
    },
    [types.LOAD_NEWS]: (state, action) => {
        return {
            ...state,
            news: action.news,
            loading: false
        }
    },
    [types.EDIT_NEWS]: (state, action) => {
        return [
            ...state,
            action.post
        ]
    }
}

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}