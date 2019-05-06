import {database} from '../../../models/config';
import * as types from './types';

export function startLoadingMember() {
    return (dispatch) => {
        dispatch(setMemberLoading());
        return database.ref('member').once('value').then((snapshot) => {
            let datas = [];
            snapshot.forEach((childSnapshot) => {
                datas.push(childSnapshot.val());
            });
            dispatch(loadMember(datas));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const setMemberLoading = () => {
    return {
        type: types.MEMBER_LOADING
    }
}

export function startAddingMember(post) {
    return (dispatch) => {
        return database.ref('member').update({[post.id]: post}).then(() => {
            dispatch(addMember(post));
        }).catch((error) => {
            console.log(error);
        });
    } 
}

export function startEditingMember(post) {
    return (dispatch) => {
        return database.ref(`member`).update({[post.id]: post}).then((snapshot) => {
            let post = [];
            snapshot.forEach((childSnapshot) => {
                post.push(childSnapshot.val());
            });
            dispatch(editMember(post));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startRemovingMember(index, id) {
    return (dispatch) => {
        return database.ref(`member/${id}`).remove().then(() => {
            dispatch(removeMember(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadMember(datas) {
    return {
        type: types.LOAD_MEMBER,
        datas
    }
}

export function addMember(post) {
    return {
        type: types.ADD_MEMBER,
        post
    }
}

export function editMember(post) {
    return {
        type: types.EDIT_MEMBER,
        post
    }
}

export function removeMember(index) {
    return {
        type: types.REMOVE_MEMBER,
        index
    }
}