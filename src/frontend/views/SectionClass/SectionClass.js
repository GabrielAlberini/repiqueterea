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
  }, [itemsClass]);

  return (
    <>
      <Layout>
        <section className="section-main-works">
          <SEOComponent title={title} description={description} />
          <Title title="Clases" />
          <article className="cont-txt-tienda">
            <p>
              Y como se trata de ir haciendo de a todo para llegar a ser un
              artista independiente, en esta sección podrás algunas cositas que
              ofrezco.
            </p>
            <p>
              Son ideales como regalo, decorar un hambiente, hacer cuadritos,
              guardar cositas. Mandame un mensaje y coordinamos para que tengas
              tu Repiquelemento jaja.
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
