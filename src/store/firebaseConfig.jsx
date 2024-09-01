import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmVGZGnJNHEITSsTsCVQlkM-r079GQhsY",
    authDomain: "transcripts-api.firebaseapp.com",
    projectId: "youtube-transcripts-api",
    storageBucket: "youtube-transcripts-api.appspot.com",
    messagingSenderId: "238876644455",
    appId: "1:238876644455:web:94d75f45ee502e53f770c2"
    };
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

export {app, auth};