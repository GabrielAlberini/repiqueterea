import "./SeccionDeTrabajosBlog.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getAllBlog } from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";

const SeccionDeTrabajosBlog = () => {
  const [itemsBlog, setItemsBlog] = useState();

  /*SEO titulo y descripción*/
  const title = "Blog | Repiquetérea";
  const description =
    "En ésta sección podrás ver diferentes posteos de temas que me gustan o interpelan y una interpretación personal, que lo disfrutes.";

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    getAllBlog().then((workList) => {
      setItemsBlog(workList);
    });
  }

  useEffect(() => {
    updateWorks();
  }, []);

  return (
    <>
      <Layout>
        <section className="section-main-works">
          <SEOComponent title={title} description={description} />
          <Title title="Blog" />
          <article className="cont-txt">
            <p>
              En este blog recopilo mis{" "}
              <span class="texto-coloreado">experiencias</span> y{" "}
              <span class="texto-coloreado">reflexiones</span> sobre el arte,
              creatividad, educación, experiencias personales y todo aquello que
              me interesa comunicar fusionando el texto con imágenes.
            </p>
            <p>
              Creo que lxs artistas muchas veces necesitamos la escritura para
              reencontrarnos con los{" "}
              <span class="texto-coloreado">procesos</span> y vincular todos los
              artistas que nos componen.
            </p>
            <p>
              La relación con el mundo siempre puede transformarse en
              expresiones artísticas, es por ello que este blog es algo así como{" "}
              <span class="texto-coloreado">
                mi cuaderno de observación de la vida en la Tierra
              </span>
              .
            </p>
          </article>
          <article className="cont-items-main-blog">
            {itemsBlog ? (
              itemsBlog.map((item) => {
                return (
                  <div className="cont-item-blog" key={item.sku}>
                    <div className="cont-img-item-blog">
                      <img
                        className="img-item-blog"
                        src={item.URLimagen}
                        alt={item.titulo}
                      />
                    </div>
                    <div className="cont-txt-item-blog">
                      <h4>{item.titulo}</h4>
                      <p>{item.fecha}</p>
                      <p>{item.descripcion}</p>
                    </div>
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

export { SeccionDeTrabajosBlog };
