import { Modal, Spinner } from "react-bootstrap";

const Spinners = ({ showSpinner }) => {
  return (
    <Modal
      show={showSpinner}
      backdrop="static"
      centered
      className="modalBgColor"
    >
      <Modal.Body className="py-5">
        <div className="py-5">
          <div className="py-5 useAppYellow m-auto d-flex flex-column align-items-center gap-2 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="normalPTag">
              Build AI analyzing to create project...
            </span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Spinners;
