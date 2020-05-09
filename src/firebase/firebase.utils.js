import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCIIMyp_YCaQ2aOER8Ftm5d_8-4opSEaho",
    authDomain: "ecommerce-site-adnan.firebaseapp.com",
    databaseURL: "https://ecommerce-site-adnan.firebaseio.com",
    projectId: "ecommerce-site-adnan",
    storageBucket: "ecommerce-site-adnan.appspot.com",
    messagingSenderId: "693314314014",
    appId: "1:693314314014:web:0aca44e69427994bcf730f",
    measurementId: "G-JC6CMR5CGB"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.database();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;