import './SectionWorksHome.css'
import { Link } from 'react-router-dom';

import { ITEMS_WORKS } from '../../services/dataItemsWork';

const SectionWorksHome = () => {
  return (
    <section className="section-works">
      <h2>Proyectos</h2>
      <p>
        En la pestañita <span className='texto-coloreado'>¿Qué hago?</span> podes encontrar todo pero acá les dejo un pequeño adelanto.
      </p>
      <article className="cont-item-work">
        {ITEMS_WORKS.map((item) => {
          return (
            <Link key={item.title} className="item-work-link" to={item.route}>
              <div className="item-work">
                <div className="cont-img-item-work">
                  <img
                    className="img-item-work"
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
                <h4 className="title-item-work">{item.title}</h4>
                <p className="description-item-work">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export { SectionWorksHome };
