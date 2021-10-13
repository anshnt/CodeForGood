import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAVS3C6iNsxUGJrj5SUXpDx1Uc-K1jb1yg",
  authDomain: "imn-frontend.firebaseapp.com",
  projectId: "imn-frontend",
  storageBucket: "imn-frontend.appspot.com",
  messagingSenderId: "259917362150",
  appId: "1:259917362150:web:6d2c72e8cce33567c3dc27"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
