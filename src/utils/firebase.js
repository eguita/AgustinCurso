import firebase from "firebase/app";
import "firebase/auth";

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId:,
  storageBucket: ,
  messagingSenderId: ,
  appId: 
};
firebase.initializeApp(firebaseConfig);

//Utils
const auth = firebase.auth();
//exports
export {auth};