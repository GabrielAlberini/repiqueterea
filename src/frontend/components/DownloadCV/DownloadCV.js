import "./DownloadCV.css";
import { Modal, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const DownloadCV = ({ showDownloadCV, setShowDownloadCV }) => {
  return (
    <Modal centered show={showDownloadCV} onHide={() => setShowDownloadCV(false)}>
      <Modal.Header>
        <Modal.Title>
          ¿Está segurx que quieres descargar el Curriculum Vitae de
          Repiquetérea?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Stack className="container-btn-cv">
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
        </Stack>
      </Modal.Footer>
    </Modal>
  );
};

export { DownloadCV };
