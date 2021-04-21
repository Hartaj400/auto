import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6SmlMHab_EihFaWLD4D50dOG2qf6AiRY",
    authDomain: "wireless-library-827eb.firebaseapp.com",
    projectId: "wireless-library-827eb",
    storageBucket: "wireless-library-827eb.appspot.com",
    messagingSenderId: "800509037116",
    appId: "1:800509037116:web:85c70fc6d2d1798ae91139"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();