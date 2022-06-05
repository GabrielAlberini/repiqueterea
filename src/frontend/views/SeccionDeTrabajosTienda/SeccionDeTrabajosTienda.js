import "./SeccionDeTrabajosTienda.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getAllTienda } from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";

const SeccionDeTrabajosTienda = () => {
  const [itemsBlog, setItemsBlog] = useState();

  /*SEO titulo y descripción*/
  const title = "Tienda | Repiquetérea";
  const description =
    "En ésta sección podrás ver los diferentes repiqueobjetos que ofrezco.";

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    getAllTienda().then((workList) => {
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
          <Title title="Tienda" />
          <article className="cont-txt-tienda">
            <p>
              El arte ilustrado puede ser un excelente regalo o autorregalo.
              Siempre es un mimo pensar en una ilustración personalizada,
              cuadritos, cuadernitos o arte digital en pequeños formatos para
              otrxs o unx mismo.
            </p>
            <p>
              Por eso, en esta en esta sección podrás encontrar muchísimos
              repiqueobjetos para comprar.
            </p>
          </article>
          <article className="cont-items-main-tienda">
            {itemsBlog ? (
              itemsBlog.map((item) => {
                return (
                  <div className="cont-item-tienda" key={item.sku}>
                    <h4>{item.nombre}</h4>
                    <p>Costo: ${item.precio}</p>
                    <p>{item.stock} unidades disponibles</p>
                    <div className="cont-img-item-tienda">
                      <img
                        className="img-item-tienda"
                        src={item.URLimagen}
                        alt={item.titulo}
                      />
                    </div>
                    <div className="cont-txt-item-tienda">
                      <p>{item.descripcion}</p>
                    </div>
                    <a
                      style={{ margin: 0 }}
                      href="https://wa.me/+5493498500775?text=Hola te comunicaste con Repiqueterea, dejame un mensajito que me comunico en un minuto :)"
                      className="btn-main"
                      rel="noreferrer"
                      target="_blank"
                    >
                      ¡Quiero uno!
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

export { SeccionDeTrabajosTienda };
