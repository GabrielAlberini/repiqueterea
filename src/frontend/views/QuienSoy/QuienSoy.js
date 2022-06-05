import "./QuienSoy.css";
import { Layout } from "../../components/Layout/Layout";
import { SectionBioHome } from "../../components/SectionBioHome/SectionBioHome";
import { SectionWorksHome } from "../../components/SectionWorksHome/SectionWorksHome";
import { SectionClassHome } from "../../components/SectionClassHome/SectionClassHome";
import { Title } from "../../components/Title/Title";
import { SEOComponent } from "../../components/SEOComponente/SEOComponente";

const QuienSoy = () => {
  const title = 'Repiquetérea | Sitio web y blog para artistas independientes';
  const description = 'Repiqueterea es un platadorma para hablar de arte, arte independiente, autogestión, artesanias y de como enseñar de una manera creativa.';

  return (
    <>
      <Layout>
        <SEOComponent title={title} description={description}/>
        <Title title={'Repiquetérea'} subtitle={'Artista Visual / Ilustradora'}/>
        <SectionBioHome />
        <SectionWorksHome />
        <SectionClassHome />
      </Layout>
    </>
  );
};

export { QuienSoy };
