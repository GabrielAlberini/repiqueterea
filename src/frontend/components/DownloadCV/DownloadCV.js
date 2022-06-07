import "./DownloadCV.css";
import { Modal, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SEOComponent } from "../SEOComponente/SEOComponente";

const DownloadCV = ({ showDownloadCV, setShowDownloadCV }) => {
  return (
    <Modal centered show={showDownloadCV} onHide={() => setShowDownloadCV(false)}>
      <SEOComponent title="Descargar CV | Repiquetérea" />
      <Modal.Header>
        <Modal.Title>
          ¿Está segurx que quieres descargar el Curriculum Vitae de
          Repiquetérea?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Stack className="container-btn-cv">
          <div className="cont-btn-cv">
          <Link
            className="btn-main"
            to="/principito.pdf"
            target="_blank"
            download 
            onClick={() => setShowDownloadCV(false)}
          >
            Descargar
          </Link>
          <button className="btn-main" onClick={() => setShowDownloadCV(false)}>
            Cancelar
          </button>
          </div>
        </Stack>
      </Modal.Footer>
    </Modal>
  );
};

export { DownloadCV };
