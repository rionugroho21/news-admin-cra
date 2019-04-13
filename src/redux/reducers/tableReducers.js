import {TABLE_LOADING, LOAD_TABLE} from '../types';

const initialState = {
    table: [],
    loading: false
}

function table(state = initialState, action) {
    switch (action.type) {
        case TABLE_LOADING: 
            return {
                ...state,
                loading: true
            }
        case LOAD_TABLE: 
            return {
                ...state,
                table: action.datas,
                loading: false
            }
        default: return state;
    }
}

export default table;