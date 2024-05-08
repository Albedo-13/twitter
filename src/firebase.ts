import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APPID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyA0OEQJtdCyVF0rNxAc_z_Rzhc1OcPLpgM",
  authDomain: "twitter-albedo13.firebaseapp.com",
  projectId: "twitter-albedo13",
  storageBucket: "twitter-albedo13.appspot.com",
  messagingSenderId: "1002682986279",
  appId: "1:1002682986279:web:99802710592b3b631ec302",
  measurementId: "G-7L3MDGL668",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () =>
  await signInWithPopup(auth, googleProvider);
export const logOut = async () => await signOut(auth);

// // TODO: rework
// const getUserData = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   console.log(querySnapshot.docs[0].data());
//   return querySnapshot.docs[0].data();
// };

// const { name } = getUserData();
