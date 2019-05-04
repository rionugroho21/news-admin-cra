//import _datas from '../../data/datas';
import {LOAD_RATES} from './types';

const _datas = [];

// function country(state = _datas, action) {
//     switch (action.type) {
//         case LOAD_RATES: return action.data;
//         default: return state;
//     }
// }

// export default country;

const ACTION_HANDLERS = {
    [types.LOAD_RATES]: state => {
        return action.data
    }
}

export default (state = _datas, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}