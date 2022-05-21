import "./QuienSoy.css";
import { Layout } from "../../components/Layout/Layout";
import { SectionBioHome } from "../../components/SectionBioHome/SectionBioHome";
import { SectionWorksHome } from "../../components/SectionWorksHome/SectionWorksHome";
import { SectionClassHome } from "../../components/SectionClassHome/SectionClassHome";
import { Title } from "../../components/Title/Title";

const QuienSoy = () => {
  return (
    <>
      <Layout>
        <Title title={'Repiqueterea'}/>
        <SectionBioHome />
        <SectionWorksHome />
        <SectionClassHome />
      </Layout>
    </>
  );
};

export { QuienSoy };
