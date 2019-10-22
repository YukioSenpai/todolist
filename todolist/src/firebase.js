import firebase from 'firebase/app';
import 'firebase/firestore'; 

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBh0-3lT0LURkS5uvXpf1MIRN3ulmRuW8Y",
    authDomain: "todolist-a5e58.firebaseapp.com",
    databaseURL: "https://todolist-a5e58.firebaseio.com",
    projectId: "todolist-a5e58",
    storageBucket: "todolist-a5e58.appspot.com",
    messagingSenderId: "720006204969",
    appId: "1:720006204969:web:aebd1adf7f82ef88a3d638"
});

export {firebaseConfig as firebase};