import _datas from '../../data/datas';
import {LOAD_RATES} from '../types';

function country(state = _datas, action) {
    switch (action.type) {
        case LOAD_RATES: return action.data;
        default: return state;
    }
}

export default country;