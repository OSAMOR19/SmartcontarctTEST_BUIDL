import { useState } from "react";
import { Image, Offcanvas } from "react-bootstrap";
import { CountryFlag } from "react-countryname-flag";
import images from "../../../../../../constants/images";
import { PiLinkSimpleLight } from "react-icons/pi";
import Rating from "../../../../../../assets/icons/rating.svg";
import MediumSolidButton from "../../../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../../../components/ui/buttons/MediumOutlineButton";
import Done from "../../../../../../assets/icons/done.svg";

const ApplicantDetailsOffCanvas = ({ show, handleClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleCloseAll = () => {
    handleClose();
    setCurrentStep(1);
  };

  const offCanvasStyles = {
    backgroundColor: "#21232F",
  };

  return (
    <Offcanvas
      placement="end"
      style={offCanvasStyles}
      show={show}
      onHide={handleCloseAll}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h5 className="useAppWhite">Applicant Details</h5>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {currentStep === 1 && <ApplicantDetails onNext={nextStep} />}
        {currentStep === 2 && (
          <HireConfirmation onNext={nextStep} onPrev={prevStep} />
        )}
        {currentStep === 3 && (
          <HiredSuccessfully
            handleCloseAll={handleCloseAll}
            handleClose={handleClose}
          />
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ApplicantDetailsOffCanvas;

const ApplicantDetails = ({ onNext }) => {
  const smallStyles = {
    color: "#999999",
  };

  const portfolioStyles = {
    color: "#889CFF",
  };

  const skillsStyles = {
    backgroundColor: "#373E5F",
    borderRadius: 31 + "px",
    padding: "7px 30px",
  };

  const projectsStyles = {
    backgroundColor: "#313440",
    borderRadius: "12px",
  };

  const linkStyles = {
    color: "#2C92EF",
  };

  const dateStyles = {
    color: "#BDBDBD",
  };
  return (
    <div className="d-flex flex-column align-items-start gap-5">
      <div className="d-flex gap-2 align-items-center">
        <Image
          src={images.charlesImage.src}
          alt={images.charlesImage.alt}
          width={70}
        />
        <div className="d-flex flex-column align-items-start">
          <h6 className="useAppWhite fs-4 fw-bold m-0">Charles Victor</h6>
          <span className="normalPTag fw-semibold">
            <Rating /> <small>5.0 Rating - 2 Jobs</small>
          </span>
        </div>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Bio
        </small>
        <p className="normalPTag fw-medium mb-0">
          is a dedicated and results-oriented project manager with 6 years, of
          experience in leading successful projects from initiation to
          completion. With a strong background in [relevant industry or field],
          [he/she/they] possess a proven track record of delivering projects on
          time and within budget while meeting quality standards.
        </p>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Country
        </small>
        <div className="d-flex align-items-center gap-2">
          <span>
            <CountryFlag countryName={"Italy"} className="fs-4" />
          </span>
          <p className="normalPTag fw-medium mb-0">Italy</p>
        </div>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Language
        </small>
        <p className="normalPTag fw-medium mb-0">English , French , Dutch</p>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Portfolio
        </small>
        <p style={portfolioStyles} className="normalPTag fw-medium mb-0">
          https://www.myportfolio.vercel.app/
        </p>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Skills
        </small>
        <div className="d-flex gap-2 flex-wrap pt-2">
          {skills.map(({ role }, index) => {
            return (
              <span
                key={index}
                style={skillsStyles}
                className="normalPTag fw-medium mb-0"
              >
                {role}
              </span>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <small style={smallStyles} className="fs-5 fw-bold">
          Projects
        </small>
        <div style={projectsStyles} className="p-3 d-flex flex-column gap-2">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="normalPTag fw-medium">Logistic Gig Application</h6>
            <span style={linkStyles} className="normalPTag fw-medium">
              View
              <span>
                <PiLinkSimpleLight />
              </span>
            </span>
          </div>
          <div className="d-flex flex-column gap-2">
            <span className="useAppYellow fs-5 fw-semibold">Review</span>
            <p className="normalPTag fw-normal">
              is a dedicated and results-oriented project manager with 6 years,
              of experience in leading successful projects from initiation to
              completion.
            </p>
          </div>
        </div>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Job History
        </small>
        <div className="d-flex flex-column pb-2">
          <h5 className="useAppWhite fs-4 fw-bold mb-0">
            Interswitch Technologies
          </h5>
          <span className="useAppWhite fs-6 fw-semibold">
            Lead Software Engineer
          </span>
          <span style={dateStyles} className="fs-6 fw-semibold">
            Jan 2019 - present
          </span>
        </div>
        <p className="normalPTag fw-normal">
          Maintain the system with timely updates; Troubleshoot programming and
          developmental errors; Implement new systems and programmes or modify
          existing software 
        </p>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Certification
        </small>
        <div className="d-flex flex-column pb-2">
          <h5 className=" useAppWhite fs-4 fw-semibold mb-0">
            Alx Software Engineer
          </h5>
          <span className="useAppWhite fs-6 fw-semibold">alx_africa</span>
          <span style={dateStyles} className="fs-6 fw-bold">
            ISSUED - Jan 2029
          </span>
        </div>
        <p style={portfolioStyles} className="normalPTag fw-semibold">
          alx_credential.pdf
        </p>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Education
        </small>
        <div className="d-flex flex-column pb-2">
          <h5 className="useAppWhite fs-4 fw-bold mb-0">
            University of Ibadan
          </h5>
          <span className="useAppWhite fs-6 fw-semibold">
            B.Sc , Material Design & Engineer
          </span>
          <span style={dateStyles} className="fs-6 fw-semibold">
            2019 - 2029
          </span>
        </div>
        <div className="useAppWhite d-flex gap-2 normalPTag fw-semibold">
          <span>Grade : </span> <span>Second Class Upper</span>
        </div>
      </div>
      <div className="w-100">
        <MediumSolidButton onClick={onNext} type="button" text="Hire" />
      </div>
    </div>
  );
};

const skills = [
  { role: "Graphic Designer" },
  { role: "Video Editor" },
  { role: "Illustrator" },
  { role: "Brand Designer" },
  { role: "Frontend Developer" },
  { role: "Backend Developer" },
  { role: "AI Engineer" },
];

const HireConfirmation = ({ onNext, onPrev }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-5 pt-5">
      <h5 className="useAppWhite fs-5 text-center">
        Are you sure you want to employ the candidate below as your project
        “Shopify e-commerce System” Manager
      </h5>
      <div className="d-flex flex-column gap-2 align-items-center">
        <Image
          src={images.charlesImage.src}
          alt={images.charlesImage.alt}
          width={70}
        />
        <h6 className="useAppWhite fs-4 fw-bold m-0">Charles Victor</h6>
        <span className="useAppWhite fw-semibold">
          <Rating /> <small>5.0 Rating - 2 Jobs</small>
        </span>
      </div>
      <div className="d-flex gap-2">
        <MediumOutlineButton
          onClick={onPrev}
          type="button"
          text="No"
          style={{
            marginTop: "0rem",
            width: "6rem",
          }}
        />
        <MediumSolidButton
          type="button"
          text="Yes"
          onClick={onNext}
          style={{
            marginTop: "0rem",
            width: "6rem",
          }}
        />
      </div>
    </div>
  );
};

const HiredSuccessfully = ({ handleCloseAll }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-5 pt-5">
      <div>
        <Done />
      </div>
      <div className="d-flex flex-column align-items-center">
        <h5 className="useAppWhite fs-4 fw-bold">Hired Successfully</h5>
        <p className="useAppWhite fs-5 fw-medium text-center">
          You’ve successfully hired CharlesEdwin for your project “Shopify
          e-commerce System” Manager
        </p>
      </div>
      <div className="">
        <MediumSolidButton
          onClick={handleCloseAll}
          type="button"
          text="Done"
          style={{
            marginTop: "0rem",
            width: "6rem",
          }}
        />
      </div>
    </div>
  );
};
