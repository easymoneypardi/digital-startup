import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyAGjBKpFzLuBdYgv3ifrDR7FfSZgQuEhsw",
    authDomain: "digital-startup-602b9.firebaseapp.com",
    databaseURL: "https://digital-startup-602b9.firebaseio.com",
    projectId: "digital-startup-602b9",
    storageBucket: "digital-startup-602b9.appspot.com",
    messagingSenderId: "399284865310",
    appId: "1:399284865310:web:3f7de2b4d50fd32925610f"
  })
  .firestore();

export const postRef = db.collection("posts");