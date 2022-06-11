import "./SectionClassHome.css";
import { Link } from "react-router-dom";
import { SECTION_CLASS_ROUTE } from "../../services/routesHeader";

const SectionClassHome = () => {
  return (
    <section className="section-class">
      <div>
        <p>
          Además de dedicarme a la producción artística, también soy Profesora
          de Artes Visuales. Me recibí en la Escuela “Juan Mantovani” de la
          ciudad de Santa Fe.
        </p>
        <p>
          Todo el tiempo estoy en búsqueda de nuevo contenido para comunicar
          desde y sobre el arte en cada espacio.
        </p>
        <p>
          Por eso, si te interesa el arte no dudes en chequear esta sección y
          compartir tu opinión. ¡Mandame un mensajito!
        </p>
        <Link className="btn-main" to={SECTION_CLASS_ROUTE}>
          Ver más
        </Link>
      </div>
      <div className="cont-img-class">
        <img
          className="img-class"
          src="https://i.ibb.co/cYc4WvK/class.jpg"
          alt="Foto de Mila profe"
        />
      </div>
    </section>
  );
};

export { SectionClassHome };
