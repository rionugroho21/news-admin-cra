import * as types from './types';

const initialState = {
    comment: [],
    loading: false
}

// function comment(state = initialState, action) {
//     switch (action.type) {
//         case COMMENT_LOADING: 
//             return {
//                 ...state,
//                 loading: true
//             }
//         case LOAD_COMMENT: 
//             return {
//                 ...state,
//                 comment: action.datas,
//                 loading: false
//             }
//         default: return state;
//     }
// }

// export default comment;

const ACTION_HANDLERS = {
    [types.COMMENT_LOADING]: state => {
        return {
            ...state,
            loading: true
        }
    },
    [types.LOAD_COMMENT]: (state, action) => {
        return {
            ...state,
            comment: action.datas,
            loading: false
        }
    }
}

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}