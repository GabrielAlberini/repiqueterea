import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addTienda } from "../../../../backend/functions/add";

const AñadirModalTienda = ({
  isModalAñadirTienda,
  setIsModalAñadirTienda,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const descripcion = document.getElementById("descripcion").value;

    const infoProducto = {
      sku,
      nombre,
      precio,
      stock,
      URLimagen,
      descripcion,
    };

    addTienda(infoProducto);
    actualizarEstadoProductos();
    setIsModalAñadirTienda(false);
  }

  return (
    <Modal
      show={isModalAñadirTienda}
      onHide={() => setIsModalAñadirTienda(false)}
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
              placeholder="Inserte el nombre del evento"
              type="text"
              className="mb-2"
            />
            <Form.Label>Precio</Form.Label>
            <Form.Control
              id="precio"
              placeholder="Inserte el lugar donde se realizará"
              type="text"
              className="mb-2"
            />
            <Form.Label>Stock</Form.Label>
            <Form.Control
              id="stock"
              placeholder="Inserte el lugar donde se realizará"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imágen de producto</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Inserte el URL de la imágen"
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
          onClick={() => setIsModalAñadirTienda(false)}
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

export { AñadirModalTienda };
