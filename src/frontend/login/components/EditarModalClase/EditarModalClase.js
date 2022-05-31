import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addClase } from "../../../../backend/functions/add";

const EditarModalClase = ({
  isModalEditarClase,
  setIsModalEditarClase,
  actualizarEstadoProductos,
  productoEditarClase,
  setProductoEditarClase,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
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
    setProductoEditarClase(null);
    actualizarEstadoProductos();
    setIsModalEditarClase(false);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductoEstado({ ...productoEstado, [name]: value });
  };

  useEffect(() => {
    setProductoEstado({ ...productoEditarClase });
  }, [productoEditarClase]);

  return (
    <Modal
      show={isModalEditarClase}
      onHide={() => {
        setIsModalEditarClase(false);
        setProductoEditarClase(null);
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
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Inserte el precio"
              type="text"
              className="mb-2"
              value={productoEstado.fecha}
              name="fecha"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Tema</Form.Label>
            <Form.Control
              id="tema"
              placeholder="Inserte el stock disponible"
              type="text"
              className="mb-2"
              value={productoEstado?.tema}
              name="tema"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              id="descripcion"
              placeholder="Ingresa la descripción de la tarea"
              type="text"
              className="mb-2"
              value={productoEstado?.descripcion}
              name="descripcion"
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
            <Form.Label>URL de la imagen de actividad</Form.Label>
            <Form.Control
              id="URLtarea"
              placeholder="Inserte el URL de la imágen de actividad"
              type="text"
              className="mb-2"
              value={productoEstado?.URLtarea}
              name="URLtarea"
              onChange={(e) => handleChange(e)}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditarClase(false);
            setProductoEditarClase(null);
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

export { EditarModalClase };
