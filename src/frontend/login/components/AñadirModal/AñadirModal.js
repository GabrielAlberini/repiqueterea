import { Modal, Stack, Form, Button } from "react-bootstrap";
import {
  addIlustracion,
  addMascotas,
  addBlog,
  addPersonajes,
} from "../../../../backend/functions/add";

const AñadirModal = ({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const sku = document.getElementById("sku").value;
    const selectWork = document.getElementById("selectWork").value;
    const fecha = document.getElementById("fecha").value;
    const titulo = document.getElementById("titulo").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const link = document.getElementById("link").value;
    const descripcion = document.getElementById("descripcion").value;

    const infoProducto = {
      selectWork,
      sku,
      titulo,
      fecha,
      URLimagen,
      link,
      descripcion,
    }

    switch (selectWork) {
      case "1":
        addIlustracion(infoProducto);
        break;
      case "2":
        addMascotas(infoProducto);
        break;
      case "3":
        addPersonajes(infoProducto);
        break;
      case "4":
        addBlog(infoProducto);
        break;
      default:
        console.log("No existe esa opción");
    }
    actualizarEstadoProductos();
    setIsModalAñadir(false);
  }

  return (
    <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
      <Modal.Header>
        <Modal.Title>Añadir producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Select
              id="selectWork"
              className="mb-2"
              aria-label="Default select example"
            >
              <option>Seleccione el tipo de trabajo</option>
              <option value="1">ILUSTRACIÓN</option>
              <option value="2">MASCOTAS</option>
              <option value="3">PERSONAJES</option>
              <option value="4">BLOG</option>
            </Form.Select>
            <Form.Label>
              ID{" "}
              <span style={{ color: "red", fontSize: 10 }}>obligatorio*</span>
            </Form.Label>
            <Form.Control
              id="sku"
              placeholder="Inserte ID"
              type="text"
              className="mb-2"
            />
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="titulo"
              placeholder="Inserte nombre del trabajo"
              type="text"
              className="mb-2"
            />
            <Form.Label>Fecha de creación</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Inserte fecha de realización"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imágen</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Inserte el URL de la imágen"
              type="text"
              className="mb-2"
            />
            <Form.Label>Link de la publicación</Form.Label>
            <Form.Control
              id="link"
              placeholder="Inserte la dirección en Instagram"
              type="text"
              className="mb-2"
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              id="descripcion"
              placeholder="Ingresa la descripción"
              type="text"
              className="mb-2"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { AñadirModal };
