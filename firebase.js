
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signInWithPopup,signOut ,GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore ,collection, addDoc,updateDoc,serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDAQ1XX6Kn-9r42xMRT5mlZwGKduvA-BtQ",
    authDomain: "fir-project-5b3a6.firebaseapp.com",
    projectId: "fir-project-5b3a6",
    storageBucket: "fir-project-5b3a6.appspot.com",
    messagingSenderId: "966013133783",
    appId: "1:966013133783:web:7c823345e6cf89c2c3e192",
    measurementId: "G-7K2KFZZ73E"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);
  export { auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, 
    sendEmailVerification, signInWithPopup,signOut,GoogleAuthProvider,provider,db,collection, addDoc ,updateDoc,serverTimestamp }
