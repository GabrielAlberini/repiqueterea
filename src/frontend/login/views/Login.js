import { Container, Form, Button } from "react-bootstrap";
import { loginEmailPassword } from "../../../backend/functions/loginEmailPassword";

const Login = () => {
  async function submitHandle(e) {
    e.preventDefault();
    const correo = e.target.formCorreo.value;
    const contraseña = e.target.formContraseña.value;
    loginEmailPassword(correo, contraseña);
  }

  return (
    <Container className="p-5">
      <h1>¡Hola! ¿Sos Requiqueterea?</h1>
      <Form className="mt-5" onSubmit={submitHandle}>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Ingrese su correo electronico"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formContraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};

export { Login };
