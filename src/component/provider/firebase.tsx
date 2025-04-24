// src/firebase.tsx

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Menentukan tipe untuk konfigurasi Firebase
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Firebase configuration object (ambil ini dari Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyB-MsqPHYGJRiKTwMDf00HS1GMIr7qeHeI",
  authDomain: "percobaan-7f0c5.firebaseapp.com",
  projectId: "percobaan-7f0c5",
  storageBucket: "percobaan-7f0c5.firebasestorage.app",
  messagingSenderId: "161763273154",
  appId: "1:161763273154:web:b01d71ca547fc13957ce5b",
  measurementId: "G-PR8QELP3WN"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firebase Authentication
const auth = getAuth(app);

// Inisialisasi Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
