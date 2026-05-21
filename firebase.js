import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3-nmis6-ZtYSFAPd55zQerT99eABMqgY",
  authDomain: "authorcartglobal-f9e0a.firebaseapp.com",
  projectId: "authorcartglobal-f9e0a",
  storageBucket: "authorcartglobal-f9e0a.firebasestorage.app",
  messagingSenderId: "674505728964",
  appId: "1:674505728964:web:80460e771b3a4ba39d7a91",
  measurementId: "G-9HN2VR24QR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
