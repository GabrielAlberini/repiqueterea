// import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore();
console.log("Aca la base de datos", db);

function addWork(infoProducto, dbName) {
  // switch (dbName) {
  //   case "1":
  //     const collectionRef = collection(db, "portfolio");
  //     const docRef = doc(collectionRef, infoProducto.sku);
  //     setDoc(docRef, infoProducto);
  //     break;
  //   case "2":
  //     const collectionRef = collection(db, "portfolio");
  //     const docRef = doc(collectionRef, infoProducto.sku);
  //     setDoc(docRef, infoProducto);
  //     break;
  //   default:
  //     return "No existe esa ocpción";
  // }

  if(dbName === '1') {
    console.log("Hola desde opcion 1")
    const collectionRef = collection(db, "ilustraciones");
    const docRef = doc(collectionRef, infoProducto.sku);
    setDoc(docRef, infoProducto);
  } else if( dbName === '2') {
    const collectionRef = collection(db, "mascotas");
    const docRef = doc(collectionRef, infoProducto.sku);
    setDoc(docRef, infoProducto);
    console.log(infoProducto)
  } 
}

export { addWork };
