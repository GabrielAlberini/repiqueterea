import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  ADMIN_ROUTE,
  SECTION_CLASS_ROUTE,
  DETALLE_DE_CLASE
} from "./frontend/services/routesHeader";
import { QuienSoy } from './frontend/views/QuienSoy/QuienSoy';
import { QueHago } from './frontend/views/QueHago/QueHago';
import { TrabajamosJuntos } from './frontend/views/TrabajamosJuntos/TrabajamosJuntos';
import { SectionClass } from "./frontend/views/SectionClass/SectionClass";
import { DashboardLogin } from './frontend/login/views/DashboardLogin';
import { NotFound } from "./frontend/views/NotFound/NotFound";

//Vistas de tipos de trabajo
import { SeccionDeTrabajos } from "./frontend/views/SeccionDeTrabajos/SeccionDeTrabajos";
import { SeccionDeTrabajosBlog } from "./frontend/views/SeccionDeTrabajosBlog/SeccionDeTrabajosBlog";
import { SeccionDeTrabajosFeria } from "./frontend/views/SeccionDeTrabajosFeria/SeccionDeTrabajosFeria";
import { SeccionDeTrabajosTienda } from "./frontend/views/SeccionDeTrabajosTienda/SeccionDeTrabajosTienda";

/*Detalle de clase*/
import { DetalleDeClase } from "./frontend/components/DetalleDeClase/DetalleDeClase";

/*Scroll to top*/
import ScrollToTop from './frontend/services/ScrollToTop'
 
const Router = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path={QUIEN_SOY_ROUTE} element={<QuienSoy />}></Route>
          <Route path={QUE_HAGO} element={<QueHago />}></Route>
          <Route path={ILUSTRACIONES} element={<SeccionDeTrabajos title='Ilustraciones' categoria='ilustraciones'/>}></Route>
          <Route path={MASCOTAS} element={<SeccionDeTrabajos title='Mascotas' categoria='mascotas'/>}></Route>
          <Route path={PERSONAJES} element={<SeccionDeTrabajos title='Personajes' categoria='personajes'/>}></Route>
          <Route path={BLOG_PERSONAL} element={<SeccionDeTrabajosBlog />}></Route>
          <Route path={EXPO_FERIAS} element={<SeccionDeTrabajosFeria />}></Route>
          <Route path={TIENDA} element={<SeccionDeTrabajosTienda />}></Route>
          <Route path={TRABAJAMOS_JUNTOS_ROUTE} element={<TrabajamosJuntos />}></Route>
          <Route path={SECTION_CLASS_ROUTE} element={<SectionClass />}></Route>
          <Route path={`${DETALLE_DE_CLASE}/:sku`} element={<DetalleDeClase />}></Route>
          <Route path={ADMIN_ROUTE} element={<DashboardLogin />}></Route>
          <Route path="/*" element={<NotFound />} > </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
