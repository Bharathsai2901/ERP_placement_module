
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBVnbVXXXJi221wAKvdxF0Bs6JVILsc_Wc",
  authDomain: "erpportal-fd74c.firebaseapp.com",
  projectId: "erpportal-fd74c",
  storageBucket: "erpportal-fd74c.appspot.com",
  messagingSenderId: "860491949636",
  appId: "1:860491949636:web:807fada019f79c2098be11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage