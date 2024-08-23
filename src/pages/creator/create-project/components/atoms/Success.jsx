import { Modal, Spinner } from "react-bootstrap";
import Done from "../../../../../assets/icons/done.svg";
import { selectProject } from "../../../../../store/projects/reducer";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Success = ({ showSuccess }) => {
  const navigate = useNavigate();
  const { requestStatus, project } = useSelector(selectProject);
  const projectTitle = project.title;

  const handleDoneClick = () => {
    navigate("/creator/dashboard");
  };

  const btnStyles = {
    width: "6rem",
  };

  return (
    <Modal
      show={showSuccess}
      backdrop="static"
      centered
      className="modalBgColor"
    >
      <Modal.Body className="py-5">
        <div className="py-5 d-flex flex-column align-items-center gap-2 text-center">
          <div>
            <Done />
          </div>
          <div className="text-center">
            <h4 className="useAppWhite fs-5 fw-semibold">
              Project Created Successfully
            </h4>
          </div>
          <p className="normalPTag">
            You’ve successfully created a project -{" "}
            <span className="useAppWhite fw-bold">
              {requestStatus === "createSuccessFull" && projectTitle
                ? projectTitle
                : ""}
            </span>
          </p>
          <MediumSolidButton
            type="button"
            text="Done"
            style={btnStyles}
            onClick={handleDoneClick}
          />
        </div>
        {/* </div> */}
      </Modal.Body>
    </Modal>
  );
};

export default Success;
