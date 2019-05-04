import * as types from './types';

const initialState = {
    photo: [],
    loading: false
}

// function photo(state = initialState, action) {
//     switch (action.type) {
//         case PHOTO_LOADING: 
//             return {
//                 ...state,
//                 loading: true
//             }
//         case LOAD_PHOTO: 
//             return {
//                 ...state,
//                 photo: action.datas,
//                 loading: false
//             }
//         default: return state;
//     }
// }

// export default photo;

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
            photo: action.datas,
            loading: false
        }
    }
}

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}