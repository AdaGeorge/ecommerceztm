// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1RVgysK0gOX_cJChhgSD69m_s378LlE",
  authDomain: "crown-ecommerce-db-267ad.firebaseapp.com",
  projectId: "crown-ecommerce-db-267ad",
  storageBucket: "crown-ecommerce-db-267ad.appspot.com",
  messagingSenderId: "806238964182",
  appId: "1:806238964182:web:6fd578ad1c1ae8a70fbc77",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
