import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {

    apiKey: "AIzaSyCwjh34pVz-B7U_f16B6iD7lLFQDOazl0g",

    authDomain: "imaginarium-1b25b.firebaseapp.com",

    projectId: "imaginarium-1b25b",

    storageBucket: "imaginarium-1b25b.appspot.com",

    messagingSenderId: "590855939830",

    appId: "1:590855939830:web:2922a28ca67c0bb26feed7",

    measurementId: "G-P44Y3MZ2J0"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { db, firebase }