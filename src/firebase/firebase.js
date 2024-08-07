import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCu0zCOAO2qG7hhWtF1GgvgTQgpSFku3I",
  authDomain: "e-commerce-elydevs.firebaseapp.com",
  projectId: "e-commerce-elydevs",
  storageBucket: "e-commerce-elydevs.appspot.com",
  messagingSenderId: "287762501224",
  appId: "1:287762501224:web:da68d02d684245232a75dd",
  measurementId: "G-4ZCXSMMWSL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
