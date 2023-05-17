import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ3HEm5PN39UYC4lnbleyinFaLsxu1iys",
  authDomain: "proyecto-reactjs-9ec72.firebaseapp.com",
  projectId: "proyecto-reactjs-9ec72",
  storageBucket: "proyecto-reactjs-9ec72.appspot.com",
  messagingSenderId: "740542686970",
  appId: "1:740542686970:web:02b2de8c2535afe0120b43",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
