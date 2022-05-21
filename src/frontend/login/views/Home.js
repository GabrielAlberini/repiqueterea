import { Container } from "react-bootstrap";
import { HeaderLogin } from "../components/HeaderLogin/HeaderLogin";
import { SectionLogin } from "../components/SectionLogin/SectionLogin";

const Home = () => {

  return (
    <>
      <Container>
        <HeaderLogin />
        <SectionLogin />
      </Container>
    </>
  );
};

export { Home };
