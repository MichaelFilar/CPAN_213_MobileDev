// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import necessary services from Firebase
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "xxxxxxxxxxx",
//   authDomain: "xxxxxxxxxxx",
//   projectId: "xxxxxxxxxxx",
//   storageBucket: "xxxxxxxxxxx",
//   messagingSenderId: "xxxxxxxxxxx",
//   appId: "xxxxxxxxxxx"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCmDGAgz3OUgMsnEm-iBo4MgKeUf8Ni8_w",
  authDomain: "jupiter-project-74135.firebaseapp.com",
  projectId: "jupiter-project-74135",
  storageBucket: "jupiter-project-74135.firebasestorage.app",
  messagingSenderId: "1024361623283",
  appId: "1:1024361623283:web:5e15b4e443ece835881186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get the Firestore database instance using app configurations
export const db = getFirestore(app)
