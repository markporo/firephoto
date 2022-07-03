  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";  //copied from firebase
  // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/storage';
  import 'firebase/compat/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCVPlmAwaf1N2RiXCCS4DETcU_ZvCaoh7s",
    authDomain: "fire-photo-mporo.firebaseapp.com",
    projectId: "fire-photo-mporo",
    storageBucket: "fire-photo-mporo.appspot.com",
    messagingSenderId: "905562265070",
    appId: "1:905562265070:web:996a99314659bb66d66aff"
  };

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig); //copied from firebase
  firebase.initializeApp(firebaseConfig);  //said this old example

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};