import { useEffect, useState } from "react";
import { Container, Stack, Button, Table } from "react-bootstrap";
import { HeaderLogin } from "../components/HeaderLogin/HeaderLogin";
import {
  getAllIlustraciones,
  getAllMascotas,
  getAllPersonajes,
  getAllBlog,
  getAllFeria,
  getAllTienda
} from "../../../backend/functions/getAll";
import {
  deleteIlustracion,
  deleteMascotas,
  deletePersonajes,
  deleteBlog,
  deleteFeria,
  deleteTienda
} from "../../../backend/functions/delete";
import { AñadirModal } from "../components/AñadirModal/AñadirModal";
import { EditarModal } from "../components/EditarModal/EditarModal";
import { AñadirModalFeria } from "../components/AñadirModalFeria/AñadirModalFeria";
import { EditarModalFeria } from "../components/EditarModalFeria/EditarModalFeria";
import { AñadirModalTienda } from "../components/AñadirModalTienda/AñadirModalTienda";
import { EditarModalTienda } from "../components/EditarModalTienda/EditarModalTienda";

const Home = () => {
  const [ilustraciones, setIlustraciones] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [blog, setBlog] = useState([]);
  const [ferias, setFeria] = useState([]);
  const [tienda, setTienda] = useState([]);

  const [isModalAñadir, setIsModalAñadir] = useState(false);
  const [isModalEditar, setIsModalEditar] = useState(false);
  const [productoEditar, setProductoEditar] = useState({});

  const [isModalAñadirFeria, setIsModalAñadirFeria] = useState(false);
  const [isModalEditarFeria, setIsModalEditarFeria] = useState(false);
  const [productoEditarFeria, setProductoEditarFeria] = useState({});

  const [isModalAñadirTienda, setIsModalAñadirTienda] = useState(false);
  const [isModalEditarTienda, setIsModalEditarTienda] = useState(false);
  const [productoEditarTienda, setProductoEditarTienda] = useState({});

  console.log("aca",productoEditarFeria)

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    getAllIlustraciones().then((workList) => {
      setIlustraciones(workList);
    });
    getAllMascotas().then((workList) => {
      setMascotas(workList);
    });
    getAllPersonajes().then((workList) => {
      setPersonajes(workList);
    });
    getAllBlog().then((workList) => {
      setBlog(workList);
    });
    getAllFeria().then((workList) => {
      setFeria(workList);
    });
    getAllTienda().then((workList) => {
      setTienda(workList);
    });
  }

  function addWork() {
    setIsModalAñadir(true);
  }

  function addFeria() {
    setIsModalAñadirFeria(true);
  }

  function addTienda() {
    setIsModalAñadirTienda(true);
  }

  useEffect(() => {
    updateWorks();
  }, []);

  return (
    <Container>
      <AñadirModal
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={updateWorks}
      />
      {productoEditar && (
        <EditarModal
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={updateWorks}
          productoEditar={productoEditar}
          setProductoEditar={setProductoEditar}
        />
      )}
      <AñadirModalFeria
        isModalAñadirFeria={isModalAñadirFeria}
        setIsModalAñadirFeria={setIsModalAñadirFeria}
        actualizarEstadoProductos={updateWorks}
      />
      {productoEditarFeria && (
        <EditarModalFeria
          isModalEditarFeria={isModalEditarFeria}
          setIsModalEditarFeria={setIsModalEditarFeria}
          actualizarEstadoProductos={updateWorks}
          productoEditarFeria={productoEditarFeria}
          setProductoEditarFeria={setProductoEditarFeria}
        />
      )}
      <AñadirModalTienda
        isModalAñadirTienda={isModalAñadirTienda}
        setIsModalAñadirTienda={setIsModalAñadirTienda}
        actualizarEstadoProductos={updateWorks}
      />
      {productoEditarTienda && (
        <EditarModalTienda
          isModalEditarTienda={isModalEditarTienda}
          setIsModalEditarTienda={setIsModalEditarTienda}
          actualizarEstadoProductos={updateWorks}
          productoEditarTienda={productoEditarTienda}
          setProductoEditarTienda={setProductoEditarTienda}
        />
      )}
      <HeaderLogin />
      <hr />
      <Stack direction="horizontal" className="justify-content-between p-3">
        <button className="btn-main" onClick={addWork}>
          {" "}
          Añadir trabajo
        </button>
        <button className="btn-main" onClick={addFeria}>
          {" "}
          Añadir Feria
        </button>
        <button className="btn-main" onClick={addTienda}>
          {" "}
          Añadir Tienda
        </button>
      </Stack>
      <hr />
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Ilustraciones</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Fecha de creación</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ilustraciones &&
            ilustraciones.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.titulo}</td>
                <td>{prod.fecha}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteIlustracion(prod).then((confirmacion) => {
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
      {/*|||||| MASCOTAS ||||||*/}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Mascotas</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Fecha de creación</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas &&
            mascotas.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.titulo}</td>
                <td>{prod.fecha}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteMascotas(prod).then((confirmacion) => {
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
      {/*|||||| PERSONAJES ||||||*/}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Personajes</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Fecha de creación</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personajes &&
            personajes.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.titulo}</td>
                <td>{prod.fecha}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deletePersonajes(prod).then((confirmacion) => {
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
      {/*|||||| EXPERIMENTOS TRABAJO EN CONJUNTO ||||||*/}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Blog personal</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Fecha de creación</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {blog &&
            blog.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.titulo}</td>
                <td>{prod.fecha}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteBlog(prod).then((confirmacion) => {
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
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Expo | Ferias</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Lugar</th>
            <th>Día</th>
            <th>Hora</th>
            <th>Dirección</th>
            <th>Banner</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ferias &&
            ferias.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.nombre}</td>
                <td>{prod.lugar}</td>
                <td>{prod.fecha}</td>
                <td>{prod.hora}</td>
                <td>{prod.direccion}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditarFeria({ ...prod });
                      setIsModalEditarFeria(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteFeria(prod).then((confirmacion) => {
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
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Tienda</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>URL de imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tienda &&
            tienda.map((prod) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.nombre}</td>
                <td>{prod.precio}</td>
                <td>{prod.stock}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditarTienda({ ...prod });
                      setIsModalEditarTienda(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteTienda(prod).then((confirmacion) => {
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
    </Container>
  );
};

export { Home };
