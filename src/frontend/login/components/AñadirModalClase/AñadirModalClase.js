import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addClase } from "../../../../backend/functions/add";

const AñadirModalClase = ({
  isModalAñadirClase,
  setIsModalAñadirClase,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const tema = document.getElementById("tema").value;
    const descripcion = document.getElementById("descripcion").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const URLtarea = document.getElementById("URLtarea").value;

    const infoProducto = {
      sku,
      nombre,
      fecha,
      tema,
      descripcion,
      URLimagen,
      URLtarea,
    };

    addClase(infoProducto);
    actualizarEstadoProductos();
    setIsModalAñadirClase(false);
  }

  return (
    <Modal
      show={isModalAñadirClase}
      onHide={() => setIsModalAñadirClase(false)}
    >
      <Modal.Header>
        <Modal.Title>Añadir nuevo producto a la tienda</Modal.Title>
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
              placeholder="Inserte el nombre de de la clase"
              type="text"
              className="mb-2"
            />
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Inserte la fecha en que se sube la clase"
              type="text"
              className="mb-2"
            />
            <Form.Label>Tema</Form.Label>
            <Form.Control
              id="tema"
              placeholder="Inserte el tema de desarrollo"
              type="text"
              className="mb-2"
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              id="descripcion"
              as="textarea"
              rows={7}
              placeholder="Ingresa el desarrollo de la clase"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imágen desciptiva de la clase</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Inserte el URL de la imágen de detalle"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imágen de actividad</Form.Label>
            <Form.Control
              id="URLtarea"
              placeholder="Inserte el URL de la imágen de la actividad"
              type="text"
              className="mb-2"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setIsModalAñadirClase(false)}
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

export { AñadirModalClase };
