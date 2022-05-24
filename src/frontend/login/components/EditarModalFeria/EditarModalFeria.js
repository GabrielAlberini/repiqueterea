import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addFeria } from "../../../../backend/functions/add";

const EditarModalFeria = ({
  isModalEditarFeria,
  setIsModalEditarFeria,
  actualizarEstadoProductos,
  productoEditarFeria,
  setProductoEditarFeria,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
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
      lugar,
      fecha,
      nombre,
      hora,
      direccion,
      URLimagen,
      link,
      descripcion,
    };

    addFeria(infoProducto);
    setProductoEditarFeria(null);
    actualizarEstadoProductos();
    setIsModalEditarFeria(false);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductoEstado({ ...productoEstado, [name]: value });
  };

  useEffect(() => {
    setProductoEstado({ ...productoEditarFeria });
  }, [productoEditarFeria]);

  return (
    <Modal
      show={isModalEditarFeria}
      onHide={() => {
        setIsModalEditarFeria(false);
        setProductoEditarFeria(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
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
            <Form.Label>Lugar</Form.Label>
            <Form.Control
              id="lugar"
              placeholder="Inserte el lugar donde se realizará"
              type="text"
              className="mb-2"
              value={productoEstado.lugar}
              name="lugar"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Día</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Inserte fecha del evento"
              type="text"
              className="mb-2"
              value={productoEstado?.fecha}
              name="fecha"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Hora</Form.Label>
            <Form.Control
              id="hora"
              placeholder="Inserte hora de comienzo"
              type="text"
              className="mb-2"
              value={productoEstado?.hora}
              name="hora"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              id="direccion"
              placeholder="Inserte hora de dirección"
              type="text"
              className="mb-2"
              value={productoEstado?.direccion}
              name="direccion"
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
            <Form.Label>Link de la publicación</Form.Label>
            <Form.Control
              id="link"
              placeholder="Link de la pubicación"
              type="text"
              className="mb-2"
              value={productoEstado?.link}
              name="link"
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
            setIsModalEditarFeria(false);
            setProductoEditarFeria(null);
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

export { EditarModalFeria };
