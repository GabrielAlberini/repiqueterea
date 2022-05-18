import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addProduct } from "../../functions/addNewProduct";

const AñadirModal = ({ isModalAñadir, setIsModalAñadir, actualizarEstadoProductos }) => {
  
  function añadirProductoModal() {
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    const infoProducto = { titulo, precio, cantidad, sku };
    console.log(infoProducto)
    addProduct(infoProducto);
    actualizarEstadoProductos()
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
            <Form.Control
              id="titulo"
              placeholder="titulo"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="precio"
              placeholder="precio"
              type="number"
              className="mb-2"
            />
            <Form.Control
              id="cantidad"
              placeholder="cantidad"
              type="number"
              className="mb-2"
            />
            <Form.Control
              id="sku"
              placeholder="sku"
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
