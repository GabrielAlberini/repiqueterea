import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function getAllWorks() {
  const productos = [];
  const collectionRef = collection(db, "portfolio");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  productos.sort((a, b) => {
    const transformSKUa = Number(a.sku);
    const transformSKUb = Number(b.sku);
    if (transformSKUa > transformSKUb) {
      return -1;
    }
    if (transformSKUa < transformSKUb) {
      return 1;
    }
    return 0;
  });
  return productos;
}



export { getAllWorks };
