
import { useEffect, useState } from "react";
import {  Stack, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteWork } from "../../../../backend/functions/delete";
import { getAllWorks } from "../../../../backend/functions/getAll";
import { AñadirModal } from '../AñadirModal/AñadirModal'
import { EditarModal } from '../EditarModal/EditarModal'

const SectionLogin = () => {
  const [portfolioWorks, setPortfolioWorks] = useState([]);
  const [isModalAñadir, setIsModalAñadir] = useState(false);
  const [isModalEditar, setIsModalEditar] = useState(false);
  const [productoEDitar, setProductoEditar] = useState({});

  function updateWorks() {
    getAllWorks().then((workList) => {
      setPortfolioWorks(workList);
    });
  }

  function addWork() {
    setIsModalAñadir(true);
  }

  useEffect(() => {
    updateWorks();
  }, []);

  return (
    <>
    <AñadirModal
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={updateWorks}
      />
      {productoEDitar && (
        <EditarModal
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={updateWorks}
          productoEditar={productoEDitar}
          setProductoEditar={setProductoEditar}
        />
      )}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>ILUSTRACIONES</h2>
        <Link to="/admin" className="btn-main" onClick={addWork}>
          Añadir trabajo
        </Link>
      </Stack>
      <hr />
      <Table className="table align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Fecha</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {portfolioWorks &&
            portfolioWorks.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.cliente}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                    {prod.descripcion}
                </td>
                <td>
                  <Button
                    className="btn-primary m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    className="btn-primary m-1"
                    variant="danger"
                    onClick={() =>
                      deleteWork(prod).then((confirmacion) => {
                        updateWorks();
                      })
                    }
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Table className="table align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Fecha</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {portfolioWorks &&
            portfolioWorks.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.cliente}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                    {prod.descripcion}
                </td>
                <td>
                  <Button
                    className="btn-primary m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    className="btn-primary m-1"
                    variant="danger"
                    onClick={() =>
                      deleteWork(prod).then((confirmacion) => {
                        updateWorks();
                      })
                    }
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export { SectionLogin };
