import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function deleteWork(producto, dbName) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result && dbName[0].selectWork === '1') {
    const coleccionRef = collection(db, "ilustraciones");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  } else if ( result && dbName[0].selectWork === '2') {
    console.log("aca desde delete ", dbName[0].selectWork)
    const coleccionRef = collection(db, "mascotas");
    const docuRef = doc(coleccionRef, producto.sku);
    console.log(docuRef)
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

export { deleteWork };
