import { auth } from './firebase-config.js';
import { 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const googleProvider = new GoogleAuthProvider();

// Google Login
export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("User logged in:", result.user);
        showMainApp();
    } catch (error) {
        console.error("Google Login Error:", error);
        alert(error.message);
    }
}

// Email/Password Registration
export async function registerWithEmail(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        showMainApp();
    } catch (error) {
        alert(error.message);
    }
}

function showMainApp() {
    document.getElementById('auth-screen').classList.replace('active', 'hidden');
    document.getElementById('app-screen').classList.replace('hidden', 'active');
}