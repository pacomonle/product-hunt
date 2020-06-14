import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-functions'

  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDe8z37nmtm5epJYbtPdHI0eU_Kwr0NbBE",
    authDomain: "roles-udemy-18cea.firebaseapp.com",
    databaseURL: "https://roles-udemy-18cea.firebaseio.com",
    projectId: "roles-udemy-18cea",
    storageBucket: "roles-udemy-18cea.appspot.com",
    messagingSenderId: "849497961463",
    appId: "1:849497961463:web:a180b74adbfb5e68f4f4f2"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const functions = firebase.functions()

  export {db, auth, functions, firebase}
