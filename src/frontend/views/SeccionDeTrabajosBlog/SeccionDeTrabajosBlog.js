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
          <Title title="Blog personal" />
          <article className="cont-txt">
            <p>En esta sección encontrás mis proyectos de ilustraciones.</p>
            <p>
              En general, me encanta convertir una idea en en un dibujo porque
              tengo la sensación de que pasan a la eternidad. Como los dibujos
              animados de cuando eramos niñes.
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
              <Loader />
            )}
          </article>
        </section>
      </Layout>
    </>
  );
};

export { SeccionDeTrabajosBlog };
