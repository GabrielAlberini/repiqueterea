import "./QueHago.css";
import { Layout } from "../../components/Layout/Layout";
import { Title } from "../../components/Title/Title";
import { GaleriaDeImagenes } from "../../components/OwlCarousel/OwlCarousel";
import { Link } from "react-router-dom";

const QueHago = () => {
  return (
    <>
      <Layout>
        <Title title="Qué hago" />
        <section className="section-trabajamos-juntos">
          <div>
            <p>El sitio esta dividido en tres grandes partes.</p>
            <p>
              <span className="señalador"></span> La primera está relacionada a
              mi desarrollo artístico. Es decir, a todas las acciones que me
              permiten expresar lo que pienso y siento.
            </p>
            <p>
              <span className="señalador"></span> La segunda está destinada a la
              producción y autogestión de mis creaciones, incluye la tienda
              online, ferias y exposiciones en las que participo.
            </p>
            <p>
              <span className="señalador"></span> Y por último,{" "}
              <Link className="links-que-hago" to="/clases">
                aquí.
              </Link> {' '}
              encontrán todo el material que comparto en mis clases, enlaces
              educativos y propuestas de talleres.
            </p>
            <p>
            Además, les recuerdo que cuento con un blog personal que tooooodo el tiempo actualizo. Allí comparto datita súper interesante para debatir y charlar. Puedes visitarlo haciendo click{" "}
              <Link className="links-que-hago" to="/blog-personal">
                aquí.
              </Link>
            </p>
          </div>
          <div className="cont-slider-que-hago">
            <GaleriaDeImagenes />
          </div>
          <div className="cont-main-img-trabajamos-juntos">
            <div>
              <img
                src="https://i.ibb.co/Vm4XQ29/1.jpg"
                alt="imagenes de cuadro"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/kDwV4Vr/2.jpg"
                alt="imagenes de cuadro"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/df2VrjR/3.jpg"
                alt="imagenes de cuadro"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export { QueHago };
