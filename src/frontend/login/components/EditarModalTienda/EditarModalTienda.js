import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addTienda } from "../../../../backend/functions/add";

const EditarModalTienda = ({
  isModalEditarTienda,
  setIsModalEditarTienda,
  actualizarEstadoProductos,
  productoEditarTienda,
  setProductoEditarTienda,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
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
    setProductoEditarTienda(null);
    actualizarEstadoProductos();
    setIsModalEditarTienda(false);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductoEstado({ ...productoEstado, [name]: value });
  };

  useEffect(() => {
    setProductoEstado({ ...productoEditarTienda });
  }, [productoEditarTienda]);

  return (
    <Modal
      show={isModalEditarTienda}
      onHide={() => {
        setIsModalEditarTienda(false);
        setProductoEditarTienda(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar producto de la tienda</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Label>
              ID{" "}
              <span style={{ color: "red", fontSize: 10 }}>
                solo de lectura*
              </span>
            </Form.Label>
            <Form.Control
              id="sku"
              placeholder="ID de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.sku}
              name="sku"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              id="nombre"
              placeholder="Inserte el nombre del evento"
              type="text"
              className="mb-2"
              value={productoEstado.nombre}
              name="nombre"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Precio</Form.Label>
            <Form.Control
              id="precio"
              placeholder="Inserte el precio"
              type="text"
              className="mb-2"
              value={productoEstado.precio}
              name="precio"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Stock</Form.Label>
            <Form.Control
              id="stock"
              placeholder="Inserte el stock disponible"
              type="text"
              className="mb-2"
              value={productoEstado?.stock}
              name="stock"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Inserte el URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.URLimagen}
              name="URLimagen"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              id="descripcion"
              placeholder="Ingresa la descripción"
              type="text"
              className="mb-2"
              value={productoEstado?.descripcion}
              name="descripcion"
              onChange={(e) => handleChange(e)}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditarTienda(false);
            setProductoEditarTienda(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EditarModalTienda };
