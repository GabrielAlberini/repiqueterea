import "./TrabajamosJuntos.css";
import { Layout } from "../../components/Layout/Layout";
import { LinksContacto } from "../../components/LinksContacto/LinksContacto";
import { Title } from "../../components/Title/Title";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";

const TrabajamosJuntos = () => {
  const title = 'Contacto | Repiquetérea';
  const description = 'Sección donde nos podemos contactar para realizar diferentes trabajos en relación al arte, ilustraciones, arte digital o colaboraciones.';

  return (
    <>
      <Layout>
      <SEOComponent title={title} description={description} />
        <Title title="Contacto" />
        <section className="section-trabajamos-juntos">
          <div>
            <p>
              En realidad, los artistas independientes trabajamos todo el
              tiempo. La <span className="texto-coloreado">creatividad</span> no
              espera y te puede encontrar en los momentos más insólitos del día.
            </p>
            <p>
              Si no es produciendo para una nueva feria, es para realizar una
              ilustración o pensar un nuevo poster con la cara de Britney
              Spears.
            </p>
            <p>
              ¡Pero me encanta! Por eso te invito a que me compartas tu idea.
            </p>
            <p>
              Como artistas debemos fortalecer nuestra red autogestiva y estar
              en constante contacto con otres. Por eso, si tenes una{" "}
              <span className="texto-coloreado">idea</span>,{" "}
              <span className="texto-coloreado">una sugerencia</span>,{" "}
              <span className="texto-coloreado">una opinión</span>,{" "}
              <span className="texto-coloreado">un proyecto</span> o lo que sea,
              aquí estoy para comenzar a crear.
            </p>
            <p>
              Además de las secciones compartidas aquí dentro, también he
              realizado intervenciones y algunos murales. Así siempre dispuesta
              a aprender.
            </p>
          </div>
          <div className="cont-social-trabajamos-juntos">
            <h3>Links de contacto</h3>
            <LinksContacto />
          </div>
          <div className="cont-main-img-trabajamos-juntos">
            <div>
              <img
                src="https://i.ibb.co/VLCw2Hp/3.jpg"
                alt="imagenes de cuadro"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/J2YzRhy/2.jpg"
                alt="imagenes de cuadro"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/9WBq1wf/1.jpg"
                alt="imagenes de cuadro"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export { TrabajamosJuntos };
