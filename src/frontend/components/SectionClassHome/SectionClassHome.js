import "./SectionClassHome.css";
import { Link } from "react-router-dom";


const SectionClassHome = () => {
  return (
    <section className="section-class">
      <div>
        <p>
          Como soy Profesora en Artes Visuales también disfruto mucho de dar
          clases. Aquí podrás ver mis recursos y materiales.
        </p>
        <p>
          Todo el tiempo estoy en búsqueda de nuevo contenido que me facilite
          comunicar al arte.
        </p>
        <p>Por eso, si tenes datita interesante ¡Mandame un mensajito! :)</p>
        <Link className="btn-main" to="/">
          Ver más
        </Link>
      </div>
      <div className="cont-img-class">
        <img
          className="img-class"
          src="https://i.ibb.co/jy4VCf7/mila-profe.jpg"
          alt="Foto de Mila profe"
        />
      </div>
    </section>
  );
};

export { SectionClassHome };
