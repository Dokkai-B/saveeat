// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: "AIzaSyB07FPwcKW7xkjxJBtrurgjQqDICbonqFc",
  //authDomain: "saveeat-eb6cf.firebaseapp.com",
  //projectId: "saveeat-eb6cf",
  //storageBucket: "saveeat-eb6cf.appspot.com",
  //messagingSenderId: "480598182409",
  //appId: "1:480598182409:web:1565d43c9c3eb78e8906d8",
  //measurementId: "G-939LW2FK8D"


  //experimental appserver
  apiKey: "AIzaSyDLq-AUSLzod166OPlOpTMBBI47Yi-F2ok",
  authDomain: "saveeattest-6e1cd.firebaseapp.com",
  projectId: "saveeattest-6e1cd",
  storageBucket: "saveeattest-6e1cd.appspot.com",
  messagingSenderId: "880844479526",
  appId: "1:880844479526:web:fafbfb6f65d76dbb0f1ae7",
  measurementId: "G-3HLRW1X9QJ"

};

export const app = initializeApp(firebaseConfig);
export const FIREBASE_APP = initializeApp(firebaseConfig);  
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const database = getFirestore(app);