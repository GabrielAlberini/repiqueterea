// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyD-a5TR-YcY6LZ_Ngi4HS16BlXVA6fJq3I",
  authDomain: "repiqueterea-web.firebaseapp.com",
  projectId: "repiqueterea-web",
  storageBucket: "repiqueterea-web.appspot.com",
  messagingSenderId: "646108074042",
  appId: "1:646108074042:web:584439bf56ac271d752503",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
