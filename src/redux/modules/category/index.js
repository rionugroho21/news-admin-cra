//import _datas from '../../data/datas';
import * as types from './types';

const _datas = [];

// function category(state = _datas, action) {
//     switch (action.type) {
//         case LOAD_CATEGORY: return action.data;
//         default: return state;
//     }
// }

// export default category;

const ACTION_HANDLERS = {
    [types.LOAD_CATEGORY]: (state, action) => {
        return action.data
    }
}

export default (state = _datas, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}