import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY_nYMVHe7Gr0akMgOTt14m4__qDUJKWY",
  authDomain: "whatsapp-21a68.firebaseapp.com",
  projectId: "whatsapp-21a68",
  storageBucket: "whatsapp-21a68.appspot.com",
  messagingSenderId: "745239275811",
  appId: "1:745239275811:web:fef6c0a2d546fa384dc496",
  measurementId: "G-HL8Z974Y33",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
