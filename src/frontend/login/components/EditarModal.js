import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addProduct } from "../../functions/addNewProduct";

const EditarModal = ({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    const infoProducto = { titulo, precio, cantidad, sku };
    console.log(infoProducto);
    addProduct(infoProducto);
    setProductoEditar(null)
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductoEstado({ ...productoEstado, [name]: value });
  };

  useEffect(()=> {
    setProductoEstado({ ...productoEditar })
  }, [productoEditar])

  return (
    <Modal show={isModalEditar} onHide={() => {
      setIsModalEditar(false)
      setProductoEditar(null)
    }}> 
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
          <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="titulo"
              placeholder="Titulo"
              type="text"
              className="mb-2"
              value={productoEstado?.titulo}
              name="titulo"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Precio</Form.Label>
            <Form.Control
              id="precio"
              placeholder="precio"
              type="number"
              className="mb-2"
              value={productoEstado?.precio}
              name="precio"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              id="cantidad"
              placeholder="cantidad"
              type="number"
              className="mb-2"
              value={productoEstado?.cantidad}
              name="cantidad"
              onChange={(e) => handleChange(e)}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
          setIsModalEditar(false)
          setProductoEditar(null)
        }}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EditarModal };
