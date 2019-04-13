import _datas from '../../data/datas';
import {LOAD_NEWS, ADD_NEWS, EDIT_NEWS, REMOVE_NEWS} from '../types';

function news(state = _datas, action) {
    switch (action.type) {
        case REMOVE_NEWS: 
            return [
                ...state.slice(0, action.index), 
                ...state.slice(action.index + 1)
            ];
        case ADD_NEWS: return [...state, action.post];
        case LOAD_NEWS: return action.news;
        case EDIT_NEWS: return [...state, action.post];
        default: return state;
    }
}

export default news;