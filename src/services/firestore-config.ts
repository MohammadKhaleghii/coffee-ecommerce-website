import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyBySnltyI6tChuFktBkvFPPrn--TqK2sjw",
  authDomain: "coffe-web-bc1c8.firebaseapp.com",
  projectId: "coffe-web-bc1c8",
  storageBucket: "coffe-web-bc1c8.appspot.com",
  messagingSenderId: "303271874741",
  appId: "1:303271874741:web:4f91b342128bab7f37aefc",
  measurementId: "G-C4JPJDW2HQ",
};

export const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth: any = async (user: any) => {
  console.log(user);
  const userDocRef = doc(db, "users", user.uid);
  const userSnapShot = getDoc(userDocRef);
  if (!(await userSnapShot).exists()) {
    const { email, displayName } = user;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createAt,
      });
    } catch (error) {
      console.error(error);
      toast.error("خطایی رخ داده است، لطفا دوباره امتحان کنید");
    }
  }
  return userDocRef;
};

export const signInwithGoogleEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
