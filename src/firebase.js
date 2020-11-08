import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByOI_9ms2zuimYBAES4Qll_NJGNuKCR3Q",
  authDomain: "whats-app-clone-ebc69.firebaseapp.com",
  databaseURL: "https://whats-app-clone-ebc69.firebaseio.com",
  projectId: "whats-app-clone-ebc69",
  storageBucket: "whats-app-clone-ebc69.appspot.com",
  messagingSenderId: "381740377002",
  appId: "1:381740377002:web:017b81044a86d588bc41d3",
  measurementId: "G-G6T9XHTRXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;