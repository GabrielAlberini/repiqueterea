import { Logo } from "../../../../frontend/components/Logo/Logo";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, QUIEN_SOY_ROUTE } from "../../../services/routesHeader";
import { cerrarSesion } from "../../../../backend/functions/signOut";


const HeaderLogin = () => {
  return (
    <Stack direction="horizontal" className="justify-content-between p-3">
      <Logo />
      <h1>¡Hola, Mila!</h1>
      <div>
        <Link to={QUIEN_SOY_ROUTE} className="btn-main">
          Ir a inicio
        </Link>
        <Link to={ADMIN_ROUTE} className="btn-main" onClick={cerrarSesion}>
          Cerrar sesion
        </Link>
      </div>
    </Stack>
  );
};

export { HeaderLogin };
