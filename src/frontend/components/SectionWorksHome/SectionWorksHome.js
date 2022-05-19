import './SectionWorksHome.css'
import { Link } from 'react-router-dom';

import { ITEMS_WORKS } from '../../services/dataItemsWork';

const SectionWorksHome = () => {
  return (
    <section className="section-works">
      <h2>Trabajos :)</h2>
      <p>
        En la pestañita <span>¿Qué hago?</span> estará todo, peeeero, va una
        pequeña descripción.
      </p>
      <article className="cont-item-work">
        {ITEMS_WORKS.map((item) => {
          return (
            <Link className="item-work-link" to="/">
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
