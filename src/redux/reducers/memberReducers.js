//import _datas from '../../data/datas';
import {LOAD_MEMBER, MEMBER_LOADING, ADD_MEMBER, EDIT_MEMBER, REMOVE_MEMBER} from '../types';

const initialState = {
    member: [],
    loading: false
}

function member(state = initialState, action) {
    switch (action.type) {
        case MEMBER_LOADING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_MEMBER: 
            return [
                ...state.slice(0, action.index), 
                ...state.slice(action.index + 1)
            ];
        case ADD_MEMBER: return [...state, action.post];
        case LOAD_MEMBER: 
            return {
                ...state,
                member: action.datas
            }
        case EDIT_MEMBER: return [...state, action.post];
        default: return state;
    }
}

export default member;