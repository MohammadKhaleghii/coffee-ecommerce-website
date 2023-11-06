import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getDoc,
  setDoc,
  getFirestore,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { CreateProductsOutput } from "./dto/products-output";
import { ProductDetails } from "../component/product-card/product-card.interface";
import { SliderInput } from "./dto/slider-input";
import { CategoryItemInput } from "./dto/category-item-input";

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

export const createUserDocumentFromAuth: any = async (
  user: any,
  additionalData: any = {}
) => {
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
        ...additionalData,
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

export const createUserDocumentWithAuth: any = async (user: any) => {
  if (!user) return;
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

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const addCollecionAndDocment = async (
  collectionKey: string,
  objectsToAdd: any[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.map((item) => {
    const docRef = doc(collectionRef, item.title.toLocaleLowerCase());
    batch.set(docRef, item);
  });
  await batch.commit();
};

export const getShopProductsCollectionAndDocument = async (
  collectionKey: string
) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const productsMap = querySnapShot.docs.map((item) =>
    item.data()
  ) as ProductDetails[];
  return productsMap;
};

export const getSlidersCollectionAndDocument = async (
  collectionKey: string
) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const slidersMap = querySnapShot.docs.map((item) =>
    item.data()
  ) as SliderInput[];
  return slidersMap;
};

export const getSpecialProductsCollectionAndDocument = async (
  collectionKey: string
) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const productsMap = querySnapShot.docs.map((item) =>
    item.data()
  ) as ProductDetails[];
  return productsMap;
};

export const getTopProductsCollectionAndDocument = async (
  collectionKey: string
) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const productsMap = querySnapShot.docs.map((item) =>
    item.data()
  ) as ProductDetails[];
  return productsMap;
};

export const getCategoriesCollectionAndDocument = async (
  collectionKey: string
) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const productsMap = querySnapShot.docs.map((item) =>
    item.data()
  ) as CategoryItemInput[];
  return productsMap;
};
