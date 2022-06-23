import "./SectionClass.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Title } from "../../components/Title/Title";
import { Loader } from "../../components/Loader/Loader";
import { getAllClase } from "../../../backend/functions/getAll";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";

const SectionClass = () => {
  const [itemsClass, setItemsClass] = useState([]);

  /*SEO titulo y descripción*/
  const title = "Clases | Repiquetérea";
  const description =
    "En ésta sección podrás ver mis diferentes clases de arte, como las organizo y todo el material que comparto en ellas.";

  //Actualizar Trabajos de Portfolio
  function updateClase() {
    getAllClase().then((workList) => {
      setItemsClass(workList);
    });
  }

  useEffect(() => {
    updateClase();
  }, []);

  return (
    <>
      <Layout>
        <section className="section-main-works">
          <SEOComponent title={title} description={description} />
          <Title title="Clases" />
          <article className="cont-txt-tienda">
            <p>
              Enseñar arte es, para mí, comunicar desde la expresión y motivar a
              explorar un mundo tan amplio y desafiante como es la cultura.
              También me parece importante develar el detrás de la docencia, la
              planificación e investigación de los sujetos educativos.
            </p>
            <p>
              Es por eso que en esta sección comparto el material que me
              inspira, retomo y creo para mis clases, para todas las edades y
              ahora también para todo público.
            </p>
          </article>
          <article className="cont-item-clase">
            {itemsClass.length > 0 ? (
              itemsClass.map((item) => {
                return (
                  <Link
                    to={`/clase-numero/${item.sku}`}
                    key={item.title}
                    className="item-clase-link"
                  >
                    <div className="item-clase">
                      <h4 className="title-item-clase">{item.nombre}</h4>
                      <div className="cont-img-item-clase">
                        <img
                          className="img-item-clase"
                          src={item.URLimagen}
                          alt={item.alt}
                        />
                      </div>
                      <p className="description-item-clase">{item.fecha}</p>
                      <p className="tema-item-clase">{item.tema}</p>
                    </div>
                  </Link>
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

export { SectionClass };
