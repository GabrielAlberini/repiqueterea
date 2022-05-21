import { Modal, Stack, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addWork
} from "../../../../backend/functions/add";

const AñadirModal = ({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const sku = document.getElementById("sku").value;
    const selectWork = document.getElementById("selectWork").value;
    const cliente = document.getElementById("cliente").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const descripcion = document.getElementById("descripcion").value;

    //Imagenes descriptivas
    const infoProducto = {
      sku,
      selectWork,
      cliente,
      URLimagen,
      descripcion,
    };

    addWork(infoProducto, selectWork);
    console.log("opcion de trabajo", selectWork)

    // switch (selectWork) {
    //   case "1":
    //     addWork(infoProducto);
    //     break;
    //   case "2":
    //     addExperiment(infoProducto);
    //     break;
    //   case "3":
    //     addFotografico(infoProducto);
    //     break;
    //   case "4":
    //     addGrupalWork(infoProducto);
    //     break;
    //   case "5":
    //     addLaminas(infoProducto);
    //     break;
    //   default:
    //     console.log("No existe esa opción");
    // }
    actualizarEstadoProductos();
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
            <Form.Select
              id="selectWork"
              className="mb-2"
              aria-label="Default select example"
            >
              <option>Seleccione el tipo de trabajo</option>
              <option value="1">Trabajo de portfolio</option>
              <option value="2">Experimento gráfico</option>
              <option value="3">Experimento fotográficos</option>
              <option value="4">Trabajo en conjunto</option>
              <option value="5">Láminas</option>
            </Form.Select>
            <Form.Label>
              ID{" "}
              <span style={{ color: "purple", fontSize: 10 }}>obligatorio*</span>
            </Form.Label>
            <Form.Control
              id="sku"
              placeholder="Inserte ID"
              type="text"
              className="mb-2"
            />
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="cliente"
              placeholder="Inserte el titulo del trabajo"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imagen</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Inserte el URL de la imágen"
              type="text"
              className="mb-2"
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              id="descripcion"
              placeholder="Ingresa la descripción"
              type="text"
              className="mb-2"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/#" className="btn-main" variant="secondary" onClick={() => setIsModalAñadir(false)}>
          Cancelar
        </Link>
        <Link to='/admin' className="btn-main" variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export { AñadirModal };
