import { useState } from "react";
import { Col, Image, Modal } from "react-bootstrap";
import CautionIcon from "../../../../../assets/icons/logout-caution.svg";
import Done from "../../../../../assets/icons/done.svg";
import images from "../../../../../constants/images";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../../components/ui/buttons/MediumOutlineButton";
import LabelTextarea from "../../../../../components/ui/textareas/LabelTextarea";

const RemoveCreatorModal = ({
  removeCreatorToggled,
  setRemoveCreatorToggled,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reason, setReason] = useState("");

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleCloseModal = () => {
    setRemoveCreatorToggled(false);
    setReason("");
    setCurrentStep(1);
  };

  return (
    <Modal show={removeCreatorToggled} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Remove Creator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentStep === 1 && (
          <RemoveCaution
            onNext={nextStep}
            handleCloseModal={handleCloseModal}
          />
        )}
        {currentStep === 2 && (
          <RemoveReason
            onNext={nextStep}
            reason={reason}
            handleReasonChange={handleReasonChange}
          />
        )}
        {currentStep === 3 && <RemoveSuccessfully />}
      </Modal.Body>
    </Modal>
  );
};

export default RemoveCreatorModal;

const RemoveCaution = ({ onNext, handleCloseModal }) => {
  const roleStyles = {
    color: "#A0A0A0",
  };
  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-4 pb-4">
      <span>
        <CautionIcon />
      </span>
      <p className="normalPTag fw-medium mb-0 w-75 text-center">
        Are you sure you want to remove this creator from your project
      </p>
      <div className="d-flex align-items-center gap-2 py-2">
        <Image
          src={images.charlesImage.src}
          alt={images.charlesImage.alt}
          width={50}
        />
        <div className="d-flex flex-column align-items-start">
          <span className="useAppWhite normalPTag fw-semibold">
            Charles Victor
          </span>
          <small className="useAppWhite fs-6 fw-medium" style={roleStyles}>
            Frontend Developer
          </small>
        </div>
      </div>
      <div className="d-flex gap-2">
        <MediumOutlineButton
          type="button"
          text="No"
          style={btnStyles}
          onClick={handleCloseModal}
        />
        <MediumSolidButton
          type="button"
          text="Yes"
          style={btnStyles}
          onClick={onNext}
        />
      </div>
    </div>
  );
};

const RemoveReason = ({ onNext, reason, handleReasonChange }) => {
  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };
  return (
    <div className="d-flex flex-column gap-5 pb-4">
      <LabelTextarea
        name="reason"
        label="Reason"
        value={reason}
        onChange={handleReasonChange}
        id="reason"
        placeholder="Write Reason why"
        rows={3}
      />
      <div>
        <MediumSolidButton
          type="button"
          text="Proceed"
          style={btnStyles}
          onClick={onNext}
        />
      </div>
    </div>
  );
};

const RemoveSuccessfully = () => {
  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };
  return (
    <div className="d-flex flex-column align-items-center gap-3 text-center pb-4">
      <div>
        <Done />
      </div>
      <div className="text-center">
        <h4 className="useAppWhite fs-5 fw-semibold mb-0">
          Removed Successfully
        </h4>
      </div>
      <Col md={10}>
        <p className="normalPTag fw-medium mb-0 text-center">
          <span className="useAppWhite fw-bold">Charles Victor</span> has been
          successfully removed from the project.
        </p>
      </Col>
      <div>
        <MediumSolidButton
          type="button"
          text="Done"
          style={btnStyles}
          // onClick={handleDoneClick}
        />
      </div>
    </div>
  );
};
