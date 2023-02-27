import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIN4v1dlIP1z8rcMm4-aQ1Km4PCGGyd0Q",
  authDomain: "chatgpt-clone-98672.firebaseapp.com",
  projectId: "chatgpt-clone-98672",
  storageBucket: "chatgpt-clone-98672.appspot.com",
  messagingSenderId: "300413402105",
  appId: "1:300413402105:web:d05710f9b08392ffaa9b28"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db  };