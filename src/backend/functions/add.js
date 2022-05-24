// import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

function addIlustracion(infoProducto) {
  const collectionRef = collection(db, "ilustraciones");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addMascotas(infoProducto) {
  const collectionRef = collection(db, "mascotas");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addPersonajes(infoProducto) {
  const collectionRef = collection(db, "personajes");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addBlog(infoProducto) {
  const collectionRef = collection(db, "blog");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addFeria(infoProducto) {
  const collectionRef = collection(db, "feria");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

export { addIlustracion, addMascotas, addPersonajes, addBlog, addFeria };
