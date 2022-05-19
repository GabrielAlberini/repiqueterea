import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-header-img">
        <img
          className="header-img"
          src="https://i.ibb.co/wRYCPsb/logo2022.png"
          alt="logo repiqueterea"
        />
      </div>
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
            <Link to="/">¿Quién soy?</Link>
          </li>
          <li>
            <Link to="/">¿Qué hago?</Link>
            <ul>
              <li>
                <Link to="/">ILUSTRACIONES</Link>
              </li>
              <li>
                <Link to="/">MASCOTAS</Link>
              </li>
              <li>
                <Link to="/">PERSONAJES</Link>
              </li>
              <li>
                <Link to="/">BLOG PERSONAL</Link>
              </li>
              <li>
                <Link to="/">EXPO / FERIAS</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">¿Cuándo trabajo?</Link>
          </li>
          <li>
            <Link to="/">¿Cómo trabajamos juntos?</Link>
          </li>
          <li>
            <Link to="/">¿Dónde me encontras?</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
