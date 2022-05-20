import "./Header.css";
import {
  QUIEN_SOY_ROUTE,
  QUE_HAGO_ROUTE,
  CUANDO_TRABAJO_ROUTE,
  TRABAJAMOS_JUNTOS_ROUTE,
  DONDE_ME_ENCONTRAS_ROUTE,
  ILUSTRACIONES,
  MASCOTAS,
  PERSONAJES,
  BLOG_PERSONAL,
  EXPO_FERIAS,
  TIENDA,
} from "../../services/routesHeader";
import { Link } from "react-router-dom";
import {Logo} from '../Logo/Logo';

const Header = () => {
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
          <li>
            <Link to={QUE_HAGO_ROUTE}>¿Qué hago?</Link>
            <ul>
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
                <Link to={BLOG_PERSONAL}>BLOG PERSONAL</Link>
              </li>
              <li>
                <Link to={EXPO_FERIAS}>EXPO / FERIAS</Link>
              </li>
              <li>
                <Link to={TIENDA}>TIENDA</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={CUANDO_TRABAJO_ROUTE}>¿Cuándo trabajo?</Link>
          </li>
          <li>
            <Link to={TRABAJAMOS_JUNTOS_ROUTE}>¿Cómo trabajamos juntos?</Link>
          </li>
          <li>
            <Link to={DONDE_ME_ENCONTRAS_ROUTE}>¿Dónde me encontras?</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
