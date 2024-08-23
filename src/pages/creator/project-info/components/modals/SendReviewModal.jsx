import { Modal } from "react-bootstrap";
import CautionIcon from "../../../../../assets/icons/logout-caution.svg";
import MediumOutlineButton from "../../../../../components/ui/buttons/MediumOutlineButton";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";

const SendReviewModal = ({
  sendReviewToggled,
  handleSendReviewToggled,
  handleYes,
}) => {
  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };
  return (
    <Modal show={sendReviewToggled} onHide={handleSendReviewToggled} centered>
      <Modal.Header closeButton>
        <Modal.Title>Send Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center justify-content-center gap-4 pb-4">
          <span>
            <CautionIcon />
          </span>
          <p className="normalPTag fw-medium mb-0 w-75 text-center">
            Are you sure you want to send this review?
          </p>
          <div className="d-flex gap-2">
            <MediumOutlineButton
              type="button"
              text="No"
              style={btnStyles}
              onClick={handleSendReviewToggled}
            />
            <MediumSolidButton
              type="button"
              text="Yes"
              style={btnStyles}
              onClick={handleYes}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SendReviewModal;
