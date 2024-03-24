import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDBHmF_TyopCyaY8tDWWlcRbYaAw-9dZQw",
    authDomain: "news2day-31afb.firebaseapp.com",
    projectId: "news2day-31afb",
    storageBucket: "news2day-31afb.appspot.com",
    messagingSenderId: "894281375753",
    appId: "1:894281375753:web:c4b1a57e41641074c2d8d8",
    measurementId: "G-94BW82QY9N"
  };

  const app = initializeApp(firebaseConfig);
  export  const auth=getAuth(app);