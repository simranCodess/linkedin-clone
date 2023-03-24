import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDL0XLbf3sbIY9a7bZdnbKgy3PCOqxFkzw",
    authDomain: "linkdn-clone-ddbe4.firebaseapp.com",
    projectId: "linkdn-clone-ddbe4",
    storageBucket: "linkdn-clone-ddbe4.appspot.com",
    messagingSenderId: "495638652645",
    appId: "1:495638652645:web:81880137df26c826af560c",
    measurementId: "G-EG7F8GXX5N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };