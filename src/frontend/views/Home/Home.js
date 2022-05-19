import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { SectionBioHome } from "../../components/SectionBioHome/SectionBioHome";
import { SectionWorksHome } from "../../components/SectionWorksHome/SectionWorksHome";
import { SectionClassHome } from "../../components/SectionClassHome/SectionClassHome";

const Home = () => {
  return (
    <>
      <Layout>
        <SectionBioHome />
        <SectionWorksHome />
        <SectionClassHome />
      </Layout>
    </>
  );
};

export { Home };
