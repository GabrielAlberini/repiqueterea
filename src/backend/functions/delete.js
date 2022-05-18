import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function deleteWork(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "portfolio");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

export { deleteWork };
