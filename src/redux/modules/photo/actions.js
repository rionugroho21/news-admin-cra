import * as types from './types';
import { getPhoto } from '../../../models/photo';

export const startLoadPhoto = (id) => dispatch => {
    dispatch({ type: types.PHOTO_LOADING });

    return new Promise((resolve, reject) => {
        getPhoto(id).then(result => {
            if(result.status === 200){
                dispatch({
                    type: types.LOAD_PHOTO,
                    payload: result.data
                });
                resolve(result);
            }else{
                reject(result)
            }            
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}