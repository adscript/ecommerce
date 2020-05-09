import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

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

  export const createUserProfilDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch(error) {
          console.log('error creating user', error.message)
        }
      }
      
      return userRef;
  }

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;