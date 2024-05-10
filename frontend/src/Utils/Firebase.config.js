import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA285QjF14oGtunbkNwZWrIGsb7UqbbVgQ",
  authDomain: "flight-booking-system-6112d.firebaseapp.com",
  projectId: "flight-booking-system-6112d",
  storageBucket: "flight-booking-system-6112d.appspot.com",
  messagingSenderId: "229845444526",
  appId: "1:229845444526:web:0bad262163193843ab0a3f",

  //   apiKey: import.meta.env.VITE_apiKey,
  //   authDomain: import.meta.env.VITE_authDomain,
  //   projectId: import.meta.env.VITE_projectId,
  //   storageBucket: import.meta.env.VITE_storageBucket,
  //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
  //   appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
