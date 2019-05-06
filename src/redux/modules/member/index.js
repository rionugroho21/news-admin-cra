import * as types from './types';

const initialState = {
    member: [],
    loading: false
}

const ACTION_HANDLERS = {
    [types.MEMBER_LOADING]: state => {
        return {
            ...state,
            loading: true
        }
    },
    [types.REMOVE_MEMBER]: (state, action) => {
        return [
            ...state.slice(0, action.index), 
            ...state.slice(action.index + 1)
        ]
    },
    [types.ADD_MEMBER]: (state, action) => {
        return [
            ...state,
            action.post
        ]
    },
    [types.LOAD_MEMBER]: (state, action) => {
        return {
            ...state,
            member: action.datas,
            loading: false
        }
    },
    [types.EDIT_MEMBER]: (state, action) => {
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