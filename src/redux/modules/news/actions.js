import {database} from '../../../models/config';
import * as types from './types';

export function startLoadingNews() {
    return (dispatch) => {
        return database.ref('datas').once('value').then((snapshot) => {
            let news = [];
            snapshot.forEach((childSnapshot) => {
                news.push(childSnapshot.val());
            });
            dispatch(loadDatas(news));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startAddingNews(post) {
    return (dispatch) => {
        return database.ref('datas').update({[post.id]: post}).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        });
    } 
}

export function startEditingNews(post) {
    return (dispatch) => {
        return database.ref(`datas`).update({[post.id]: post}).then((snapshot) => {
            let post = [];
            snapshot.forEach((childSnapshot) => {
                post.push(childSnapshot.val());
            });
            dispatch(editPost(post));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startRemovingNews(index, id) {
    return (dispatch) => {
        return database.ref(`datas/${id}`).remove().then(() => {
            dispatch(removePost(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadDatas(news) {
    return {
        type: types.LOAD_NEWS,
        news
    }
}

export function addPost(post) {
    return {
        type: types.ADD_NEWS,
        post
    }
}

export function editPost(post) {
    return {
        type: types.EDIT_NEWS,
        post
    }
}

export function removePost(index) {
    return {
        type: types.REMOVE_NEWS,
        index
    }
}