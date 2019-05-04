import axios from 'axios';
import * as types from './types';

export const startLoadPhoto = (id) => dispatch => {
    dispatch(setPhotoLoading());
    return axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
            albumId: id
        }
    })
    .then(res => {
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