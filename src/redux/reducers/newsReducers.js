import _datas from '../../data/datas';
import {LOAD_DATAS, ADD_POST, EDIT_POST, REMOVE_POST} from '../types';

function datas(state = _datas, action) {
    switch (action.type) {
        case REMOVE_POST: 
            return [
                ...state.slice(0, action.index), 
                ...state.slice(action.index + 1)
            ];
        case ADD_POST: return [...state, action.post];
        case LOAD_DATAS: return action.datas;
        case EDIT_POST: return [...state, action.post];
        default: return state;
    }
}

export default datas;