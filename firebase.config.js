import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBSh3DP3gbSofnIcxIXk42LG7_JpBrISeE",
  authDomain: "heal-n-glow.firebaseapp.com",
  projectId: "heal-n-glow",
  storageBucket: "heal-n-glow.appspot.com",
  messagingSenderId: "277455084531",
  appId: "1:277455084531:web:d27a5059d5f3f02bb75086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;