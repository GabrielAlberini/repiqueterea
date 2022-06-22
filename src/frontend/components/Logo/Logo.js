import './Logo.css'
import { Link } from "react-router-dom";
import { QUIEN_SOY_ROUTE } from "../../services/routesHeader";

const Logo = () => {
  return (
    <Link to={QUIEN_SOY_ROUTE}>
      <div className="container-logo">
        <img
          className="logo"
          src="./logo.png"
          alt="logo repiqueterea"
        />
      </div>
    </Link>
  );
};

export { Logo };