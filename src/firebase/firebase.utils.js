import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOYx05AH06FWsNFpD-gaFYVWjAk4AhgjE",
    authDomain: "crwn-db-4ab97.firebaseapp.com",
    databaseURL: "https://crwn-db-4ab97.firebaseio.com",
    projectId: "crwn-db-4ab97",
    storageBucket: "crwn-db-4ab97.appspot.com",
    messagingSenderId: "848086466781",
    appId: "1:848086466781:web:b429ad49cbc6f118b91b34",
    measurementId: "G-8NS461JWWM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;