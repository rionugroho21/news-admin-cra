import * as types from './types';
import { getPhoto } from '../../../models/photo';

export const startLoadPhoto = (id) => dispatch => {
    dispatch(setPhotoLoading());
    getPhoto(id).then(res => {
        let datas = res.data;
        dispatch(loadPhoto(datas));
    }).catch((error) => {
        console.log(error);
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