import {database} from '../database/config';

export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('datas').once('value').then((snapshot) => {
            let datas = [];
            snapshot.forEach((childSnapshot) => {
                datas.push(childSnapshot.val());
            });
            dispatch(loadDatas(datas));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('datas').update({[post.id]: post}).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        });
    } 
}

export function startEditingDatas(post) {
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

export function startRemovingDatas(index, id) {
    return (dispatch) => {
        return database.ref(`datas/${id}`).remove().then(() => {
            dispatch(removePost(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadDatas(datas) {
    return {
        type: 'LOAD_DATAS',
        datas
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function editPost(post) {
    return {
        type: 'EDIT_POST',
        post
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}