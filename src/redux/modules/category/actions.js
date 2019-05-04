import {database} from '../../../models/config';
import * as types from './types';

export function startLoadingCat() {
    return (dispatch) => {
        return database.ref('category').once('value').then((snapshot) => {
            let datas = [];
            snapshot.forEach((childSnapshot) => {
                datas.push(childSnapshot.val());
            });
            dispatch(loadCategory(datas))
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadCategory(data) {
    return {
        type: types.LOAD_CATEGORY,
        data
    }
}