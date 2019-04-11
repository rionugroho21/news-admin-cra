import axios from 'axios';
import {PHOTO_LOADING, LOAD_PHOTO} from '../types';

export const startLoadPhoto = (id) => dispatch => {
    dispatch(setPhotoLoading());
    axios.get('https://jsonplaceholder.typicode.com/photos', {
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
        type: LOAD_PHOTO,
        datas
    }
}

// Profile loading
export const setPhotoLoading = () => {
    return {
        type: PHOTO_LOADING
    }
}