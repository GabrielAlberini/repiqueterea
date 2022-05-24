import "./SeccionDeTrabajos.css";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import {
  getAllIlustraciones,
  getAllMascotas,
  getAllPersonajes,
} from "../../../backend/functions/getAll";
import { Loader } from "../../components/Loader/Loader";
import { Title } from "../../components/Title/Title";

const SeccionDeTrabajos = ({ title, categoria }) => {
  const [itemList, setItemList] = useState();

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    switch (categoria) {
      case "ilustraciones":
        getAllIlustraciones().then((workList) => {
          setItemList(workList);
        });
        break;
      case "mascotas":
        getAllMascotas().then((workList) => {
          setItemList(workList);
        });
        break;
      case "personajes":
        getAllPersonajes().then((workList) => {
          setItemList(workList);
        });
        break;
      default:
        console.log("No extiste tal categoria");
    }
  }

  useEffect(() => {
    updateWorks();
  }, [itemList]);

  return (
    <>
      <Layout>
        <section className="section-main-works">
          <Title title={title} />
          {/* <article className="cont-txt">
            <p>En esta sección encontrás mis proyectos de ilustraciones.</p>
            <p>
              En general, me encanta convertir una idea en en un dibujo porque
              tengo la sensación de que pasan a la eternidad. Como los dibujos
              animados de cuando eramos niñes.
            </p>
          </article> */}
          <article className="cont-items-main">
            {itemList ? (
              itemList.map((item) => {
                if (item.sku % 2 === 1) {
                  return (
                    <div className="cont-item" key={item.sku}>
                      <div className="cont-img-item">
                        <img
                          className="img-item"
                          src={item.URLimagen}
                          alt={item.titulo}
                        />
                      </div>
                      <div className="cont-txt-item">
                        <h4>{item.titulo}</h4>
                        <p>{item.fecha}</p>
                        <p>{item.descripcion}</p>
                        <a
                          style={{ margin: 0 }}
                          href={item.link}
                          className="btn-main"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Ver en Instagram
                        </a>
                        <div className="cont-button">
                          <a
                            style={{ margin: 0 }}
                            href="https://wa.me/+5493498500775?text=¡Hola, soy Mila! Compartime tu idea y luego continuamos! Muchas gracias por contactarme :)"
                            className="btn-main"
                            rel="noreferrer"
                            target="_blank"
                          >
                            ¡Quiero el mio!
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="cont-item-reverse" key={item.sku}>
                      <div className="cont-img-item">
                        <img
                          className="img-item"
                          src={item.URLimagen}
                          alt={item.titulo}
                        />
                      </div>
                      <div className="cont-txt-item">
                        <h4>{item.titulo}</h4>
                        <p>{item.fecha}</p>
                        <p>{item.descripcion}</p>
                        <a
                          style={{ margin: 0 }}
                          href={item.link}
                          className="btn-main"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Ver en Instagram
                        </a>
                        <div className="cont-button">
                          <a
                            style={{ margin: 0 }}
                            href="https://wa.me/+5493498500775?text=¡Hola, soy Mila! Compartime tu idea y luego continuamos! Muchas gracias por contactarme :)"
                            className="btn-main"
                            rel="noreferrer"
                            target="_blank"
                          >
                            ¡Quiero el mio!
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
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

export { SeccionDeTrabajos };
