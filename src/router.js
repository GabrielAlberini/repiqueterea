import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './frontend/views/Home/Home';
// import { NotFound } from './views/NotFound/NotFound'
import { DashboardLogin } from './frontend/login/views/DashboardLogin';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<DashboardLogin />}></Route>
          {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
