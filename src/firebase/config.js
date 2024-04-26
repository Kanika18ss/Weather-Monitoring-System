import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbzdd8OH-dYbmp1pa-rjWXMcc1LlawiF4",
  authDomain: "weathermonitoring012.firebaseapp.com",
  projectId: "weathermonitoring012",
  storageBucket: "weathermonitoring012.appspot.com",
  messagingSenderId: "514000391563",
  appId: "1:514000391563:web:0d431e063b67129150f38e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
