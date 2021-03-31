import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMoYomQmLF4IwJMdno1zPdAbnNbMLh4ck",
    authDomain: "linkedin-clone-4f74f.firebaseapp.com",
    projectId: "linkedin-clone-4f74f",
    storageBucket: "linkedin-clone-4f74f.appspot.com",
    messagingSenderId: "812686988835",
    appId: "1:812686988835:web:36bc1cd37d0c1822ba4396"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };