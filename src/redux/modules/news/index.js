//import _datas from '../../data/datas';
import * as types from './types';

const _datas = [];

// function news(state = _datas, action) {
//     switch (action.type) {
//         case REMOVE_NEWS: 
//             return [
//                 ...state.slice(0, action.index), 
//                 ...state.slice(action.index + 1)
//             ];
//         case ADD_NEWS: return [...state, action.post];
//         case LOAD_NEWS: return action.news;
//         case EDIT_NEWS: return [...state, action.post];
//         default: return state;
//     }
// }

// export default news;

const ACTION_HANDLERS = {
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
        return action.news
    },
    [types.EDIT_NEWS]: (state, action) => {
        return [
            ...state,
            action.post
        ]
    }
}

export default (state = _datas, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}