import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMpKNLrLIfr8H0qFGMZrrvPSxUn91DTOc",
  authDomain: "fir-api-4a105.firebaseapp.com",
  projectId: "fir-api-4a105",
  storageBucket: "fir-api-4a105.appspot.com",
  messagingSenderId: "235327337156",
  appId: "1:235327337156:web:c1cac4ee906fba68f48f91"
};

const app = initializeApp(firebaseConfig)  ;
const db = getFirestore(app);

export {app, db};

