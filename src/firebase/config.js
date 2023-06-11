import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSqRlRAxe23WLGvv4mMNUHmk5YnCmFW8A",
    authDomain: "netflix-clone-a1a15.firebaseapp.com",
    projectId: "netflix-clone-a1a15",
    storageBucket: "netflix-clone-a1a15.appspot.com",
    messagingSenderId: "48318309101",
    appId: "1:48318309101:web:b15a9394f1faee9239e2e4",
    measurementId: "G-GKDVX402S5"
};


export default firebase.initializeApp(firebaseConfig)