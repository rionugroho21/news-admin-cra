import axios from 'axios';
import * as types from './types';

export const startLoadComment = () => dispatch => {
    dispatch(setCommentLoading());
    return axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        let datas = res.data;
        dispatch(loadComment(datas));
    }).catch((error) => {
        console.log(error);
    });
}

export const loadComment = (datas) => {
    return {
        type: types.LOAD_COMMENT,
        datas
    }
}

export const setCommentLoading = () => {
    return {
        type: types.COMMENT_LOADING
    }
}