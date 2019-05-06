import * as types from './types';
import { getComment } from '../../../models/comment';

export const startLoadComment = () => dispatch => {
    dispatch(setCommentLoading());
    getComment().then(res => {
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