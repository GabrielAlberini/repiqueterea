import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  ADMIN_ROUTE,
  SECTION_CLASS_ROUTE
} from "./frontend/services/routesHeader";
import { QuienSoy } from './frontend/views/QuienSoy/QuienSoy';
import { QueHago } from './frontend/views/QueHago/QueHago';
import { CuandoTrabajo } from './frontend/views/CuandoTrabajo/CuandoTrabajo';
import { TrabajamosJuntos } from './frontend/views/TrabajamosJuntos/TrabajamosJuntos';
import { DondeMeEncontras } from './frontend/views/DondeMeEncontras/DondeMeEncontras';
// import { NotFound } from './views/NotFound/NotFound'
import { SectionWork } from "./frontend/views/SectionWork/SectionWork";
import { SectionClass } from "./frontend/views/SectionClass/SectionClass";
import { DashboardLogin } from './frontend/login/views/DashboardLogin';
//Vistas de tipos de trabajo
import { SeccionDeTrabajos } from "./frontend/views/SeccionDeTrabajos/SeccionDeTrabajos";
import { SeccionDeTrabajosBlog } from "./frontend/views/SeccionDeTrabajosBlog/SeccionDeTrabajosBlog";
import { SeccionDeTrabajosFeria } from "./frontend/views/SeccionDeTrabajosFeria/SeccionDeTrabajosFeria";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={QUIEN_SOY_ROUTE} element={<QuienSoy />}></Route>
          <Route path={QUE_HAGO_ROUTE} element={<QueHago />}></Route>
          <Route path={ILUSTRACIONES} element={<SeccionDeTrabajos title='Ilustraciones' categoria='ilustraciones'/>}></Route>
          <Route path={MASCOTAS} element={<SeccionDeTrabajos title='Mascotas' categoria='mascotas'/>}></Route>
          <Route path={PERSONAJES} element={<SeccionDeTrabajos title='Personajes' categoria='personajes'/>}></Route>
          <Route path={BLOG_PERSONAL} element={<SeccionDeTrabajosBlog />}></Route>
          <Route path={EXPO_FERIAS} element={<SeccionDeTrabajosFeria />}></Route>
          <Route path={TIENDA} element={<SectionWork titleSection='tienda'/>}></Route>
          <Route path={CUANDO_TRABAJO_ROUTE} element={<CuandoTrabajo />}></Route>
          <Route path={TRABAJAMOS_JUNTOS_ROUTE} element={<TrabajamosJuntos />}></Route>
          <Route path={DONDE_ME_ENCONTRAS_ROUTE} element={<DondeMeEncontras />}></Route>
          <Route path={SECTION_CLASS_ROUTE} element={<SectionClass />}></Route>
          <Route path={ADMIN_ROUTE} element={<DashboardLogin />}></Route>
          {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
