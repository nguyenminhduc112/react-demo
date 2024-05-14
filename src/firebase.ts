import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArwfr76EtaZ8x8bq8PIxw2McJco8GgI3s",
  authDomain: "dhtotoapp.firebaseapp.com",
  projectId: "dhtotoapp",
  storageBucket: "dhtotoapp.appspot.com",
  messagingSenderId: "284931889827",
  appId: "1:284931889827:web:48c356170918584638fd16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
