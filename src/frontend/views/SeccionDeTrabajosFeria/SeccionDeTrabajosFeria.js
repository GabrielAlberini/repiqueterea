import "./SeccionDeTrabajosFeria.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getAllFeria } from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";

const SeccionDeTrabajosFeria = () => {
  const [itemsBlog, setItemsBlog] = useState();

  /*SEO titulo y descripción*/
  const title = "Expo | Ferias - Repiquetérea";
  const description =
    "En ésta sección podrás ver las diferentes ferias en las que participaré.";

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
          <SEOComponent title={title} description={description} />
          <Title title="Expo y Ferias" />
          <article className="cont-txt-feria">
            <p>
              Aquí podrás encontrar info sobre las próximas ferias y eventos en
              los que participo.
            </p>
            <p>
              Parte importante de mi trabajo es el intercambio que se producen
              en las ferias. De esta forma lxs artistas independientes
              sostenemos nuestros proyectos y autogestionamos todo nuestro
              material. ¡Te espero la próxima!
            </p>
          </article>
          <article className="cont-items-main-feria">
            {itemsBlog ? (
              itemsBlog.map((item) => {
                return (
                  <div className="cont-item-feria" key={item.sku}>
                    <h4>{item.nombre}</h4>
                    <p>{item.lugar}</p>
                    <p>{item.direccion}</p>
                    <p>
                      {item.fecha} - {item.hora}
                    </p>
                    <div className="cont-img-item-feria">
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
              <>
                <SEOComponent title={"Cargando..."} />
                <Loader />
              </>
            )}
          </article>
        </section>
      </Layout>
    </>
  );
};

export { SeccionDeTrabajosFeria };
