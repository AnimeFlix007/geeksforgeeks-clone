import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX_4uAsdwy_6R6Dx9fBTFOEwY9uAEVx-s",
  authDomain: "geeks4geeks-20be4.firebaseapp.com",
  projectId: "geeks4geeks-20be4",
  storageBucket: "geeks4geeks-20be4.appspot.com",
  messagingSenderId: "1064912476590",
  appId: "1:1064912476590:web:dd4ea725a198a18560d03f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// auth providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
