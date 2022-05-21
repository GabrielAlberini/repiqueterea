import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import {
  addWork,
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
    const URLimagen = document.getElementById("URLimagen").value;
    const categoria = document.getElementById("categoria").value;
    const cliente = document.getElementById("cliente").value;
    const web = document.getElementById("web").value;
    const descripcion = document.getElementById("descripcion").value;
    const hashtag = document.getElementById("hashtag").value;
    const sku = document.getElementById("sku").value;

    //Imagenes descriptivas
    const foto1 = document.getElementById("URLimagen1").value;
    const foto2 = document.getElementById("URLimagen2").value;
    const foto3 = document.getElementById("URLimagen3").value;
    const foto4 = document.getElementById("URLimagen4").value;
    const foto5 = document.getElementById("URLimagen5").value;
    const foto6 = document.getElementById("URLimagen6").value;

    const infoProducto = {
      selectWork,
      cliente,
      URLimagen,
      categoria,
      web,
      descripcion,
      hashtag,
      sku,
      foto1,
      foto2,
      foto3,
      foto4,
      foto5,
      foto6,
    };

    switch (productoEstado.selectWork) {
      case "1":
        addWork(infoProducto);
        break;
      // case "2":
      //   addExperiment(infoProducto);
      //   break;
      // case "3":
      //   addFotografico(infoProducto);
      //   break;
      // case "4":
      //   addGrupalWork(infoProducto);
      //   break;
      // case "5":
      //   addLaminas(infoProducto);
      //   break;
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
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              id="cliente"
              placeholder="Nombre del cliente"
              type="text"
              className="mb-2"
              value={productoEstado.cliente}
              name="cliente"
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
            <Form.Label>Imagenes descriptivas</Form.Label>
            <Form.Control
              id="URLimagen1"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.foto1}
              name="foto1"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              id="URLimagen2"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.foto2}
              name="foto2"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              id="URLimagen3"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.foto3}
              name="foto3"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              id="URLimagen4"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.foto4}
              name="foto4"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              id="URLimagen5"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.foto5}
              name="foto5"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              id="URLimagen6"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.foto6}
              name="foto6"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              id="categoria"
              placeholder="Categoría del trabajo"
              type="text"
              className="mb-2"
              value={productoEstado?.categoria}
              name="categoria"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>URL del sitio WEB</Form.Label>
            <Form.Control
              id="web"
              placeholder="URL del sitio WEB"
              type="text"
              className="mb-2"
              value={productoEstado?.web}
              name="web"
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
            <Form.Label>Hashtags</Form.Label>
            <Form.Control
              id="hashtag"
              placeholder="Hashtags relacionados"
              type="text"
              className="mb-2"
              value={productoEstado?.hashtag}
              name="hashtag"
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
