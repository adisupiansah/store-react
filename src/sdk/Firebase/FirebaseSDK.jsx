import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpuyF79PeGYrtKpALoLprRXT8esj7IaIU",
  authDomain: "store-react-782fc.firebaseapp.com",
  projectId: "store-react-782fc",
  storageBucket: "store-react-782fc.appspot.com",
  messagingSenderId: "387685757623",
  appId: "1:387685757623:web:f17a592c08a177c7871332",
  measurementId: "G-L5H67WRXYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);