import Modal from "react-bootstrap/Modal";
import PinInput from "react-pin-input";

const TransactionPin = ({ toggled, setToggled }) => {
  const handleClose = () => {
    setToggled(false);
  };
  return (
    <Modal show={toggled} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Transaction Pin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center gap-4">
          <h5 className="useAppWhite fs-4 fw-bold">
            Enter Your Transaction Pin{" "}
          </h5>
          <p className="useAppWhite fs-5 fw-semibold">
            Enter your secure PIN to authorize payment
          </p>
          <div className="pb-5">
            <PinInput
              length={4}
              initialValue=""
              secret
              secretDelay={0}
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              focus={true}
              style={{ padding: "10px" }}
              inputStyle={{ color: "red" }}
              inputFocusStyle={{ color: "blue" }}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TransactionPin;
