import React, { useState } from "react";
import { Container } from "react-bootstrap";

//Views
import { Home } from "./Home";
import { Login } from "./Login";

//Importamos la aplicación/credenciales
import firebaseApp from '../../../backend/firebase/credenciales';

// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function DashboardLogin() {
  const [usuario, setUsuaruio] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuaruio(usuarioFirebase);
    } else {
      setUsuaruio(null);
    }
  });

  return <Container fluid>{usuario ? <Home /> : <Login />}</Container>;
}

export { DashboardLogin };
