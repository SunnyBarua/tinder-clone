import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAo-4KFDCEbPsODv1XS-IV6ifeaHJBaMuM",
  authDomain: "tinder-clone-c147a.firebaseapp.com",
  databaseURL: "https://tinder-clone-c147a.firebaseio.com",
  projectId: "tinder-clone-c147a",
  storageBucket: "tinder-clone-c147a.appspot.com",
  messagingSenderId: "835946662834",
  appId: "1:835946662834:web:a73d22989ebc358bb0f2ab",
  measurementId: "G-4XSRJ9SC6E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
