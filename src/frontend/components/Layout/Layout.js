
import './Layout.css';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
    </>
  );
};

export { Layout };
