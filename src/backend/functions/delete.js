import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function deleteIlustracion(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "ilustraciones");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deleteMascotas(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "mascotas");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deletePersonajes(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "personajes");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deleteBlog(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "blog");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deleteFeria(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "feria");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deleteTienda(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "tienda");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deleteClase(producto) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "clases");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

export { deleteIlustracion, deleteMascotas, deletePersonajes, deleteBlog, deleteFeria, deleteTienda, deleteClase };
