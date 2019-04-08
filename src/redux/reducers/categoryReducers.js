import _datas from '../../data/datas';
import {LOAD_CATEGORY} from '../types';

function category(state = _datas, action) {
    switch (action.type) {
        case LOAD_CATEGORY: return action.data;
        default: return state;
    }
}

export default category;