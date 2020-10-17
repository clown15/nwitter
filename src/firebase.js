import * as firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyBR60GBdkeh3elij4BrUiPGbtpBQTbuymw",
    authDomain: "nwitter-68122.firebaseapp.com",
    databaseURL: "https://nwitter-68122.firebaseio.com",
    projectId: "nwitter-68122",
    storageBucket: "nwitter-68122.appspot.com",
    messagingSenderId: "927620624361",
    appId: "1:927620624361:web:e465ccb3452a040ad12578"
  };

export default firebase.initializeApp(firebaseConfig);