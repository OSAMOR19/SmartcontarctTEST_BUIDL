import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Modal } from "react-bootstrap";
import Switch from "../../../../../components/ui/switch/Switch";
import images from "../../../../../constants/images";
import EditIcon from "../../../../../assets/icons/edit-outline.svg";
import Done from "../../../../../assets/icons/done.svg";
import Rating from "../../../../../assets/icons/rating.svg";
import BackBtn from "../../../../../assets/icons/back-btn.svg";
import ApplicantDetailsOffCanvas from "./components/ApplicantDetailsOffCanvas";

const Opening = ({ project }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      {currentStep === 1 && (
        <AppliedRoles project={project} onNext={nextStep} />
      )}
      {currentStep === 2 && <AppliedTalents onPrev={prevStep} />}
    </>
  );
};

export default Opening;

const AppliedRoles = ({ onNext, project }) => {
  const [publishedChecked, setPublishedChecked] = useState(false);
  const [publishedToggle, setPublishedToggled] = useState(false);

  const id = project.id;
  let step = 4;

  // Ensure step is an integer
  step = parseInt(step, 10);

  const navigate = useNavigate();

  const handleEditBudget = () => {
    navigate(`/creator/create-project?step=${step}&id=${id}`);
  };

  const handlePublishedChecked = () => {
    setPublishedChecked(!publishedChecked);

    if (!publishedChecked) {
      setPublishedToggled(true);
    }
  };

  const handlePublishedToggle = () => {
    setPublishedToggled(false);
  };

  const divStyles = {
    background: "#404356",
    borderRadius: "12px",
    cursor: "pointer",
  };

  const circleStyles = {
    width: "2.5rem",
    height: "2.5rem",
    border: "0.7px solid #6A7294",
  };

  return (
    <>
      <div className="d-flex flex-column gap-2 flex-md-row flex-lg-column">
        <div className="w-100" style={divStyles}>
          <div className="d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center gap-2" onClick={onNext}>
              <span
                style={circleStyles}
                className="useAppWhite d-flex justify-content-center align-items-center fs-6 fw-bold rounded-circle"
              >
                FD
              </span>
              <div className="d-flex flex-column align-items-start">
                <span className="useAppWhite normalPTag fw-semibold">
                  Frontend Developer
                </span>
                <small className="useAppWhite fs-6 fw-medium">$1,500</small>
                <small className="useAppWhite fs-6 fw-medium">
                  10 Applicants
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div onClick={handleEditBudget}>
                <EditIcon />
              </div>
              <div>
                <Switch
                  checked={publishedChecked}
                  onChange={handlePublishedChecked}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublishedModal
        publishedToggle={publishedToggle}
        handlePublishedToggle={handlePublishedToggle}
      />
    </>
  );
};

const PublishedModal = ({ publishedToggle, handlePublishedToggle }) => {
  return (
    <Modal show={publishedToggle} onHide={handlePublishedToggle} centered>
      <Modal.Body className="py-5">
        <div className="d-flex flex-column align-items-center justify-content-center gap-4 py-5">
          <span>
            <Done />
          </span>
          <h5 className="normalPTag fw-bold mb-0">Published</h5>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const AppliedTalents = ({ onPrev }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const backBtnStyles = {
    cursor: "pointer",
  };

  const divStyles = {
    background: "#404356",
    borderRadius: "12px",
    cursor: "pointer",
  };

  const badgesStyles = {
    width: "2.5rem",
    height: "2.5rem",
    border: "0.7px solid #6A7294",
  };

  return (
    <>
      <div className="pb-3 d-flex align-items-center gap-2">
        <div onClick={onPrev} style={backBtnStyles}>
          <BackBtn />
        </div>
        <span className="normalPTag fs-5 fw-semibold">Frontend Developer</span>
      </div>
      <div className="d-flex flex-column gap-2 flex-md-row flex-lg-column">
        <div className="w-100" style={divStyles} onClick={handleShow}>
          <div className="d-flex align-items-center justify-content-between p-3">
            <div className="d-flex gap-2 align-items-center">
              <Image
                src={images.charlesImage.src}
                alt={images.charlesImage.alt}
                width={60}
              />
              <div className="d-flex flex-column align-align-items-start">
                <h6 className="useAppWhite fw-bold m-0">Charles Victor</h6>
                <span className="useAppWhite fw-semibold">
                  <Rating /> <small>5.0 Rating - 2 Jobs</small>
                </span>
              </div>
            </div>
            <span
              style={badgesStyles}
              className="useAppWhite d-flex justify-content-center align-items-center fs-6 fw-bold rounded-2"
            >
              {/* FD */}
            </span>
          </div>
        </div>
      </div>
      <ApplicantDetailsOffCanvas show={show} handleClose={handleClose} />
    </>
  );
};
