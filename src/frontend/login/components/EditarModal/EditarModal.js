import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import {
  addIlustracion,
  addMascotas,
  addPersonajes,
  addBlog,
} from "../../../../backend/functions/add";

const EditarModal = ({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
    const selectWork = productoEstado.selectWork;
    const sku = document.getElementById("sku").value;
    const titulo = document.getElementById("titulo").value;
    const fecha = document.getElementById("fecha").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const link = document.getElementById("link").value;
    const descripcion = document.getElementById("descripcion").value;

    const infoProducto = {
      selectWork,
      titulo,
      fecha,
      URLimagen,
      link,
      descripcion,
      sku
    };

    switch (productoEstado.selectWork) {
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
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductoEstado({ ...productoEstado, [name]: value });
  };

  useEffect(() => {
    setProductoEstado({ ...productoEditar });
  }, [productoEditar]);

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
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
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="titulo"
              placeholder="Nombre del cliente"
              type="text"
              className="mb-2"
              value={productoEstado.titulo}
              name="titulo"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Fecha"
              type="text"
              className="mb-2"
              value={productoEstado.fecha}
              name="fecha"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>URL imágen detalle</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.URLimagen}
              name="URLimagen"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Link de la publicación</Form.Label>
            <Form.Control
              id="link"
              placeholder="URL de la publicación"
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
              placeholder="Descripción del trabajo"
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
            setIsModalEditar(false);
            setProductoEditar(null);
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

export { EditarModal };
