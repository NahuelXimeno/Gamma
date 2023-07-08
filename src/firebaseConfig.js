import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfTEMkmp2DMB8iI4ehZZV8xBHl3-NbA3Y",
  authDomain: "articstore-f5959.firebaseapp.com",
  projectId: "articstore-f5959",
  storageBucket: "articstore-f5959.appspot.com",
  messagingSenderId: "853895459113",
  appId: "1:853895459113:web:ea9d46f27c89935b99c738",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
