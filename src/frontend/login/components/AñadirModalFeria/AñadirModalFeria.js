import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addFeria } from "../../../../backend/functions/add";

const AñadirModalFeria = ({
  isModalAñadirFeria,
  setIsModalAñadirFeria,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    const lugar = document.getElementById("lugar").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const direccion = document.getElementById("direccion").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const link = document.getElementById("link").value;
    const descripcion = document.getElementById("descripcion").value;

    const infoProducto = {
      sku,
      nombre,
      lugar,
      fecha,
      direccion,
      hora,
      URLimagen,
      link,
      descripcion,
    };

    addFeria(infoProducto);
    actualizarEstadoProductos();
    setIsModalAñadirFeria(false);
  }

  return (
    <Modal
      show={isModalAñadirFeria}
      onHide={() => setIsModalAñadirFeria(false)}
    >
      <Modal.Header>
        <Modal.Title>Añadir próxima feria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
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
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              id="nombre"
              placeholder="Inserte el nombre del evento"
              type="text"
              className="mb-2"
            />
            <Form.Label>Lugar</Form.Label>
            <Form.Control
              id="lugar"
              placeholder="Inserte el lugar donde se realizará"
              type="text"
              className="mb-2"
            />
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              id="direccion"
              placeholder="Inserte el lugar donde se realizará"
              type="text"
              className="mb-2"
            />
            <Form.Label>Día</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Inserte fecha del evento"
              type="text"
              className="mb-2"
            />
            <Form.Label>Hora</Form.Label>
            <Form.Control
              id="hora"
              placeholder="Inserte hora de comienzo"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imágen banner</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Inserte el URL de la imágen"
              type="text"
              className="mb-2"
            />
            <Form.Label>Link de publicación</Form.Label>
            <Form.Control
              id="link"
              placeholder="Link de la pubicación"
              type="text"
              className="mb-2"
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              id="descripcion"
              as="textarea"
              rows={7}
              placeholder="Ingresa la descripción"
              type="text"
              className="mb-2"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setIsModalAñadirFeria(false)}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { AñadirModalFeria };
