import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuwE6PluGuq8URKID46GXNPssVN69Vjcs",
  authDomain: "techiela-bc59c.firebaseapp.com",
  databaseURL: "https://techiela-bc59c-default-rtdb.firebaseio.com",
  projectId: "techiela-bc59c",
  storageBucket: "techiela-bc59c.appspot.com",
  messagingSenderId: "1053145896420",
  appId: "1:1053145896420:web:2801b5fe1066037d4e63f1",
  measurementId: "G-4G4N2RLSYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};