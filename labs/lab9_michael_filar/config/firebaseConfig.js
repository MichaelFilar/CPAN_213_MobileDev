// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPxBRJpTMhsaMMxgtWGeDbWu75TxvoOWo",
  authDomain: "filar-lab-3.firebaseapp.com",
  projectId: "filar-lab-3",
  storageBucket: "filar-lab-3.firebasestorage.app",
  messagingSenderId: "637863961658",
  appId: "1:637863961658:web:cfeed4d1f32188becb8103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)