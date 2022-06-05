import "./Header.css";
import {
  QUIEN_SOY_ROUTE,
  QUE_HAGO,
  TRABAJAMOS_JUNTOS_ROUTE,
  ILUSTRACIONES,
  MASCOTAS,
  PERSONAJES,
  BLOG_PERSONAL,
  EXPO_FERIAS,
  TIENDA,
  SECTION_CLASS_ROUTE,
} from "../../services/routesHeader";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";

const Header = () => {
  const URL_CV =
    "https://tn.com.ar/resizer/NgDHjpxTSD4gCzee-HvO9crnzTA=/767x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/LNG3ZOI33VFYPBF22RIU6VE45I.jpg";

  return (
    <header>
      <Logo />
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar">
        <svg
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </label>
      <nav>
        <ul>
          <li>
            <Link to={QUIEN_SOY_ROUTE}>¿Quién soy?</Link>
          </li>
          <li className="menu-desplegable">
            <Link to={QUE_HAGO}>
              ¿Qué hago? <span className="menu-desplegable-icon">+</span>
            </Link>
            <ul className="ul-desplegable">
              <li>
                <Link to={ILUSTRACIONES}>ILUSTRACIONES</Link>
              </li>
              <li>
                <Link to={MASCOTAS}>MASCOTAS</Link>
              </li>
              <li>
                <Link to={PERSONAJES}>PERSONAJES</Link>
              </li>
              <li>
                <Link to={EXPO_FERIAS}>EXPO / FERIAS</Link>
              </li>
              <li>
                <Link to={TIENDA}>TIENDA</Link>
              </li>
              <li>
                <Link to={BLOG_PERSONAL}>BLOG PERSONAL</Link>
                <Link to={SECTION_CLASS_ROUTE}>CLASES</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={TRABAJAMOS_JUNTOS_ROUTE}>¿Cómo nos contactamos?</Link>
          </li>
          <li>
            <Link className="link-cv" to="/principito.pdf" target="_blank" download>
              Descargar CV
            </Link>
          </li>
          <li className="link-instagram">
            <a
              href="https://www.instagram.com/repiqueterea.art/"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
