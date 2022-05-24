import "./SeccionDeTrabajosTienda.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getAllTienda } from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";

const SeccionDeTrabajosTienda = () => {
  const [itemsBlog, setItemsBlog] = useState();

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
          <Title title="Tienda" />
          <article className="cont-txt">
            <p>Y como se trata de ir haciendo de a todo para llegar a ser un artista independiente, en esta sección podrás algunas cositas que ofrezco.</p>
            <p>
              Son ideales como regalo, decorar un hambiente, hacer cuadritos, guardar cositas. Mandame un mensaje y coordinamos para que tengas tu Repiquelemento jaja.
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
              <Loader />
            )}
          </article>
        </section>
      </Layout>
    </>
  );
};

export { SeccionDeTrabajosTienda };
