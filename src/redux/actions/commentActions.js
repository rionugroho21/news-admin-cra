import axios from 'axios';
import {COMMENT_LOADING, LOAD_COMMENT} from '../types';

export const startLoadComment = () => dispatch => {
    dispatch(setCommentLoading());
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        let datas = res.data;
        dispatch(loadComment(datas));
    }).catch((error) => {
        console.log(error);
    });
}

export const loadComment = (datas) => {
    return {
        type: LOAD_COMMENT,
        datas
    }
}

// Profile loading
export const setCommentLoading = () => {
    return {
        type: COMMENT_LOADING
    }
}