import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVryzUdKfgUYXhbFwreTRTLt-y1BEu0jo",
    authDomain: "whats-app-clone-66fd2.firebaseapp.com",
    projectId: "whats-app-clone-66fd2",
    storageBucket: "whats-app-clone-66fd2.appspot.com",
    messagingSenderId: "1022613154558",
    appId: "1:1022613154558:web:b987aff515cdb0700c53af",
    measurementId: "G-XV2C3YS0VJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;