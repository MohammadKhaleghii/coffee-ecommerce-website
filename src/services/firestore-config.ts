import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBySnltyI6tChuFktBkvFPPrn--TqK2sjw",
  authDomain: "coffe-web-bc1c8.firebaseapp.com",
  projectId: "coffe-web-bc1c8",
  storageBucket: "coffe-web-bc1c8.appspot.com",
  messagingSenderId: "303271874741",
  appId: "1:303271874741:web:4f91b342128bab7f37aefc",
  measurementId: "G-C4JPJDW2HQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
