// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZWP1mjMrGzL5iPIBTtKyldUG_1FDZ3pA",
    authDomain: "your-stories-9c523.firebaseapp.com",
    projectId: "your-stories-9c523",
    storageBucket: "your-stories-9c523.appspot.com",
    messagingSenderId: "569750282745",
    appId: "1:569750282745:web:74375e2424b7f639241d28",
    measurementId: "G-Y7HMZ3JRHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();

// export const signInWithGoogle = signInWithRedirect(auth, googleProvider);
isSupported().then((supported) => {
    if (supported) {
        const analytics = getAnalytics(app);
    }
});
