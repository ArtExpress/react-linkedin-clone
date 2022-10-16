import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDiW-3HgLQSWBiDif-8ffHB_xvWIc-spiQ",
    authDomain: "linkedin-clone-6c85a.firebaseapp.com",
    projectId: "linkedin-clone-6c85a",
    storageBucket: "linkedin-clone-6c85a.appspot.com",
    messagingSenderId: "471213089928",
    appId: "1:471213089928:web:2283e6329367c30e8aeb3d",
    measurementId: "G-KY1D80T1HY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth };