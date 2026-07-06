// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AlzaSyA4fHBo6ZWUwUem8jqx0e50KKr48e3g2jM",
  authDomain: "signmatch-f835c.firebaseapp.com",
  projectId: "signmatch-f835c",
  storageBucket: "signmatch-f835c.firebasestorage.app",
  messagingSenderId: "233250119906",
  appId: "1:233250119906:web:cc9e7638088a990fe4fabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services so your other JS files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);