import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkfNpj5MzecbYmJx2_kftkJsuHuOlV1DI",
  authDomain: "web-musik-9056a.firebaseapp.com",
  projectId: "web-musik-9056a",
  storageBucket: "web-musik-9056a.appspot.com", // Perbaiki storage bucket
  messagingSenderId: "844922737017",
  appId: "1:844922737017:web:777cd3d33fa87acd665fa8",
  measurementId: "G-QBYPNWS0NW",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inisialisasi Firebase Services
const auth = getAuth(app); // Untuk Authentication
const db = getFirestore(app); // Untuk Firestore Database
const storage = getStorage(app); // Untuk menyimpan gambar

export { auth, db, storage, analytics };
