import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkfNpj5MzecbYmJx2_kftkJsuHuOlV1DI",
  authDomain: "web-musik-9056a.firebaseapp.com",
  projectId: "web-musik-9056a",
  storageBucket: "web-musik-9056a.appspot.com",
  messagingSenderId: "844922737017",
  appId: "1:844922737017:web:777cd3d33fa87acd665fa8",
  measurementId: "G-QBYPNWS0NW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
