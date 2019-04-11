import _datas from '../../data/datas';
import {PHOTO_LOADING, LOAD_PHOTO} from '../types';

const initialState = {
    photo: [],
    loading: false
}

function photo(state = initialState, action) {
    switch (action.type) {
        case PHOTO_LOADING: 
            return {
                ...state,
                loading: true
            }
        case LOAD_PHOTO: 
            return {
                ...state,
                photo: action.datas,
                loading: false
            }
        default: return state;
    }
}

export default photo;