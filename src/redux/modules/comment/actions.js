import * as types from './types';
import { getComment } from '../../../models/comment';

export const startLoadComment = () => dispatch => {
    dispatch(setCommentLoading());

    return new Promise((resolve, reject) => {
        getComment().then(result => {
            if(result.status === 200){
                dispatch(loadComment(result.data));
                resolve(result);
            }else{
                reject(result)
            }            
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    })
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