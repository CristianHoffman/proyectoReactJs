import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQTaX72TtNEZAyY3GC42Rdl6mBGowi0jE",
  authDomain: "napoles-sneakers.firebaseapp.com",
  projectId: "napoles-sneakers",
  storageBucket: "napoles-sneakers.appspot.com",
  messagingSenderId: "783552068492",
  appId: "1:783552068492:web:f631c10186eb68da8c74a9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)