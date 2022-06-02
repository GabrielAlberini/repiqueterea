
import './Layout.css';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollButton } from '../BotonIrArriba/BotonIrArriba';

const Layout = ({children}) => {
  
  return (
    <>
        <Header />
        <main id="main-content">
          {children}
          <ScrollButton />
        </main>
        <Footer />
    </>
  );
};

export { Layout };
