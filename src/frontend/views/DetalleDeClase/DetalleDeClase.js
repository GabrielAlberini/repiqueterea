import "./DetalleDeClase.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { getDetailClass } from "../../../backend/functions/getAll";
import { ModalImagenDetalleClase } from "../../components/ModalImagenDetalleClase/ModalImagenDetalleClase";
import { Loader } from "../../components/Loader/Loader";

const DetalleDeClase = () => {
  const [clase, setClase] = useState([]);
  const [isModalAñadir, setIsModalAñadir] = useState(false);
  const [loader, setLoader] = useState(true);
  const { sku } = useParams();

  function updateWorks() {
    getDetailClass(sku).then((clase) => {
      setClase(clase);
      setLoader(false);
    });
  }

  useEffect(() => {
    updateWorks();
  }, []);

  console.log(sku, clase);

  return (
    <>
      <Layout>
        <ModalImagenDetalleClase
          isModalAñadir={isModalAñadir}
          setIsModalAñadir={setIsModalAñadir}
          URLtarea={clase.URLtarea}
        />
        {loader ? (
          <section className="cont-loader-detalle">
            <Loader />
          </section>
        ) : (
          <section className="section-detalle-clase">
            <h3>{clase.nombre}</h3>
            <p>{clase.fecha}</p>
            <p>{clase.tema}</p>
            <div>
              <img src={clase.URLimagen} alt="" />
            </div>
            <p className="detalle-clase-descr">{clase.descripcion}</p>
            <button
              className="btn-main btn-detalle-clase"
              onClick={() => {
                setIsModalAñadir(true);
              }}
            >
              Ver actividad
            </button>
            <Link to="/clases" className="btn-main btn-detalle-atras">
              Volver atras
            </Link>
          </section>
        )}
      </Layout>
    </>
  );
};

export { DetalleDeClase };
