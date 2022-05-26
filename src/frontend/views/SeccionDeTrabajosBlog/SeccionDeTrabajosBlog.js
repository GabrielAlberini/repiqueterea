import "./SeccionDeTrabajosBlog.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getAllBlog } from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";

const SeccionDeTrabajosBlog = () => {
  const [itemsBlog, setItemsBlog] = useState();

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    getAllBlog().then((workList) => {
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
          <Title title="Blog" />
          <article className="cont-txt">
            <p>En este blog recopilo mis experimentos y reflexiones sobre arte, derechos de los artistas, feminismo, consumo responsable, creatividad, educación, medio ambiente, salud mental, colaboración, activismo y cualquier tema que sienta que me ayuda a entender mejor mi relación mundo. Podría decir que este blog es algo así como mi cuaderno de observación de la vida en la Tierra.</p>
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
              <Loader />
            )}
          </article>
        </section>
      </Layout>
    </>
  );
};

export { SeccionDeTrabajosBlog };
