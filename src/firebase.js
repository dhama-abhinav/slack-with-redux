import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAx_qUCs6Dm-EYHgnocZ4QJtBggtZlXR4I",
    authDomain: "slack-withredux.firebaseapp.com",
    databaseURL: "https://slack-withredux.firebaseio.com",
    projectId: "slack-withredux",
    storageBucket: "slack-withredux.appspot.com",
    messagingSenderId: "1074861607277",
    appId: "1:1074861607277:web:8e704bc6cc31e9020df264",
    measurementId: "G-GKLXBYQJJM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth = firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db