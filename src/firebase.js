import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCayTqnXJWqYpGKmdHSo0Igv8kWV5JRu3E",
  authDomain: "line-clone-react-sample2.firebaseapp.com",
  projectId: "line-clone-react-sample2",
  storageBucket: "line-clone-react-sample2.appspot.com",
  messagingSenderId: "262511959701",
  appId: "1:262511959701:web:301d16ea24ac58b54d459c"

});


const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db , auth};