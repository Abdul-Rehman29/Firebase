import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "1:894842886144:web:ab15666cafad6b297020e5",
    authDomain: "fir-c331e.firebaseapp.com",
    projectId: "fir-c331e",
    storageBucket: "fir-c331e.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
