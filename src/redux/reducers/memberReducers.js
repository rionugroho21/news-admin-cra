import _datas from '../../data/datas';
import {LOAD_MEMBER, ADD_MEMBER, EDIT_MEMBER, REMOVE_MEMBER} from '../types';

function member(state = _datas, action) {
    switch (action.type) {
        case REMOVE_MEMBER: 
            return [
                ...state.slice(0, action.index), 
                ...state.slice(action.index + 1)
            ];
        case ADD_MEMBER: return [...state, action.post];
        case LOAD_MEMBER: return action.datas;
        case EDIT_MEMBER: return [...state, action.post];
        default: return state;
    }
}

export default member;