import * as types from './types';
import { getPhoto } from '../../../models/photo';

export const startLoadPhoto = (id) => dispatch => {
    dispatch(setPhotoLoading());

    return new Promise((resolve, reject) => {
        getPhoto(id).then(result => {
            if(result.status === 200){
                dispatch(loadPhoto(result.data));
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

export const loadPhoto = (datas) => {
    return {
        type: types.LOAD_PHOTO,
        datas
    }
}

export const setPhotoLoading = () => {
    return {
        type: types.PHOTO_LOADING
    }
}