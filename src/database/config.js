import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCsond7gb_wwcBTUIStPuFltMh5z9MLToE",
    authDomain: "news-76bc0.firebaseapp.com",
    databaseURL: "https://news-76bc0.firebaseio.com",
    projectId: "news-76bc0",
    storageBucket: "news-76bc0.appspot.com",
    messagingSenderId: "756536185606"
};
firebase.initializeApp(config);

const database = firebase.database();

export {database};