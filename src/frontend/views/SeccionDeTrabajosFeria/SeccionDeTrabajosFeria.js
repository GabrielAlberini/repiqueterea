import "./SeccionDeTrabajosFeria.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getAllFeria } from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";

const SeccionDeTrabajosFeria = () => {
  const [itemsBlog, setItemsBlog] = useState();

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    getAllFeria().then((workList) => {
      setItemsBlog(workList);
    });
  }

  useEffect(() => {
    updateWorks();
  }, [itemsBlog]);

  return (
    <>
      <Layout>
        <section className="section-main-works">
          <Title title="Expo y Ferias" />
          <article className="cont-txt">
            <p>Aquí podrás ver cuales son las siguientes fechas de ferias</p>
            <p>
              Parte importante de mi trabajo es el intercambio que se producen
              en las ferias. De esta forma los artistas independientes podemos
              seguir sosteniendonos y autogestionando todo nuestro material. Así
              que espero verte en alguna.
            </p>
          </article>
          <article className="cont-items-main-feria">
            {itemsBlog ? (
              itemsBlog.map((item) => {
                return (
                  <div className="cont-item-feria" key={item.sku}>
                    <h4>{item.nombre}</h4>
                    <p>{item.lugar}</p>
                    <p>
                      {item.fecha} - {item.hora}
                    </p>
                    <p>{item.direccion}</p>
                    <div className="cont-img-item-fera">
                      <img
                        className="img-item-feria"
                        src={item.URLimagen}
                        alt={item.titulo}
                      />
                    </div>
                    <div className="cont-txt-item-feria">
                      <p>{item.descripcion}</p>
                    </div>
                    <a
                      style={{ margin: 0 }}
                      href={item.link}
                      className="btn-main"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Ver en Instagram
                    </a>
                  </div>
                );
              })
            ) : (
              <Loader />
            )}
          </article>
        </section>
      </Layout>
    </>
  );
};

export { SeccionDeTrabajosFeria };
