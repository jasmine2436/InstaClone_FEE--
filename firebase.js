import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
const firebaseConfig = {

    apiKey: "AIzaSyCHox3WQmwTgNzCp8zW-zMa0b6BVtem4Ic",
    authDomain: "g10beingsocial.firebaseapp.com",
    projectId: "g10beingsocial",
    storageBucket: "g10beingsocial.appspot.com",
    messagingSenderId: "938080653893",
    appId: "1:938080653893:web:5ae3a75f824e64a122892c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }