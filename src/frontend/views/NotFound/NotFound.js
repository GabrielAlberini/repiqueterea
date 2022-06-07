import "./NotFound.css";
import { Layout } from "../../components/Layout/Layout";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";
import { Link } from "react-router-dom";

const NotFound = () => {
  const title = 'No se encuentra :(';
  const description = 'Página que aparece cuando no se encuentra lo que deseas encontrar. Nada por hacer.';
  
  return (
    <>
      <Layout>
        <SEOComponent title={title} description={description} />
        <section className="section-not-found">
            <div>
                <img src="https://http.cat/404" alt="" />
            </div>
            <Link to='/' className="btn-main">Volver a inicio</Link>
        </section>
      </Layout>
    </>
  );
};

export { NotFound };
