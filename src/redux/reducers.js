import _datas from '../data/datas';
import {combineReducers} from 'redux';

function datas(state = _datas, action) {
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_POST': return [...state, action.post];
        case 'LOAD_DATAS': return action.datas;
        case 'EDIT_POST': return [...state, action.post];
        default: return state;
    }
}

function category(state = _datas, action) {
    switch (action.type) {
        case 'LOAD_CATEGORY': return action.data;
        default: return state;
    }
}

const rootReducer = combineReducers({datas, category});

export default rootReducer;