import axios from 'axios';
import {TABLE_LOADING, LOAD_TABLE} from '../types';

export const startLoadTable = () => dispatch => {
    dispatch(setTableLoading());
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        let datas = res.data;
        dispatch(loadTable(datas));
    }).catch((error) => {
        console.log(error);
    });
}

export const loadTable = (datas) => {
    return {
        type: LOAD_TABLE,
        datas
    }
}

// Profile loading
export const setTableLoading = () => {
    return {
        type: TABLE_LOADING
    }
}