import {COMMENT_LOADING, LOAD_COMMENT} from '../types';

const initialState = {
    comment: [],
    loading: false
}

function comment(state = initialState, action) {
    switch (action.type) {
        case COMMENT_LOADING: 
            return {
                ...state,
                loading: true
            }
        case LOAD_COMMENT: 
            return {
                ...state,
                comment: action.datas,
                loading: false
            }
        default: return state;
    }
}

export default comment;