import * as firebase from "firebase/app";

var firebaseConfig = {
  // .env 파일에 저장되어 있는 변수들 이며 변수의 이름은 REACT_APP_의 형태로 지어야만 한다
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STPRAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };

export default firebase.initializeApp(firebaseConfig);