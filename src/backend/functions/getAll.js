import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function getAllIlustraciones() {
  const productos = [];
  const collectionRef = collection(db, "ilustraciones");
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

async function getAllMascotas() {
  const productos = [];
  const collectionRef = collection(db, "mascotas");
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

async function getAllPersonajes() {
  const productos = [];
  const collectionRef = collection(db, "personajes");
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

async function getAllBlog() {
  const productos = [];
  const collectionRef = collection(db, "blog");
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

async function getAllFeria() {
  const productos = [];
  const collectionRef = collection(db, "feria");
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

async function getAllTienda() {
  const productos = [];
  const collectionRef = collection(db, "tienda");
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

async function getAllClase() {
  const productos = [];
  const collectionRef = collection(db, "clases");
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

//Llamada a detalle de clase

async function getDetailClass(sku) {
  const docRef = doc(db, "clases", sku);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const clase = docSnap.data();
    clase.sku = sku;
    return clase; 
  }
}


export {
  getAllIlustraciones,
  getAllMascotas,
  getAllPersonajes,
  getAllBlog,
  getAllFeria,
  getAllTienda,
  getAllClase,
  getDetailClass
};
