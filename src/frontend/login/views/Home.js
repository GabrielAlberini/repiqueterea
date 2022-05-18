// import { useEffect, useState } from "react";
import { cerrarSesion } from '../../../backend/functions/signOut';
import { Container, Stack, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <Stack direction="horizontal" className="justify-content-between p-3">
          <div style={{ width: 200 }}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/L6yf5c2/logo-repiqueterea-1-1.png"
              alt=""
            />
          </div>
          <h1>¡Hola, Mila!</h1>
          <div>
            <Button>Ir a inicio</Button>
            <Button className="m-3" onClick={cerrarSesion}>
              Cerrar sesion
            </Button>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export { Home };
