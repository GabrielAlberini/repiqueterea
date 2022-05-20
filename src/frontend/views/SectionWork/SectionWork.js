import "./SectionWork.css";
import { Layout } from "../../components/Layout/Layout";

const SectionWork = ({titleSection}) => {
  console.log(titleSection)

  return (
    <>
      <Layout>
          <div>Hola desde {titleSection}</div>
      </Layout>
    </>
  );
};

export { SectionWork };
