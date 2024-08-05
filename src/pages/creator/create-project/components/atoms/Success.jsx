import { Container, Col } from "react-bootstrap";
import Done from "../../../../../assets/icons/done.svg";
import { selectProject } from "../../../../../store/projects/reducer";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const { requestStatus, project } = useSelector(selectProject);
  const projectId = project.title;

  const handleDoneClick = () => {
    navigate("/creator/dashboard");
  };

  const bodyStyles = {
    backgroundColor: "rgba(39, 42, 56, 0.79)",
    zIndex: "50",
  };

  const divStyles = {
    padding: "3rem",
    maxWidth: "350px",
    borderRadius: "13px",
    background: "#1A1C28",
    color: "#EEA20E",
  };

  return (
    <Container
      fluid
      style={bodyStyles}
      className="position-fixed m-auto min-vh-100"
    >
      <section className="min-vh-100 d-flex justify-content-center align-items-center">
        <div
          style={divStyles}
          className="m-auto d-flex flex-column align-items-center gap-2 text-center "
        >
          <div>
            <Done />
          </div>
          <div className="text-center">
            <h4
              style={{
                color: "#FFFF",
              }}
              className="fs-5 fw-semibold"
            >
              Project Created Successfully
            </h4>
          </div>
          <p className="normalPTag">
            You’ve successfully created a project -{" "}
            <span
              style={{
                color: "#FFFF",
                fontWeight: "700",
              }}
            >
              {requestStatus === "createSuccessFull" && projectId
                ? projectId
                : ""}
            </span>
          </p>
          <MediumSolidButton
            type="button"
            text="Done"
            style={{
              width: "6rem",
            }}
            onClick={handleDoneClick}
          />
        </div>
      </section>
    </Container>
  );
};

export default Success;
