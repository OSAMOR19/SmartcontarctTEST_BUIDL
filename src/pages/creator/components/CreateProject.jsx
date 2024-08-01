import { useNavigate } from "react-router-dom";
import { Container, Col, Image } from "react-bootstrap";
import MediumSolidButton from "../../../components/ui/buttons/MediumSolidButton";
import images from "../../../constants/images";

const CreateProject = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/creator/create-project");
  };
  return (
    <Container
      style={{
        paddingTop: "2rem",
        paddingBottom: "5rem",
      }}
    >
      <Col
        style={{
          background: "#272A38",
          padding: "2rem",
          borderRadius: 14 + "px",
        }}
      >
        <div className="d-flex flex-column align-align-items-center justify-content-center">
          <Image
            src={images.createImage.src}
            alt={images.createImage.alt}
            style={{
              width: 149 + "px",
            }}
          />
          <h4
            style={{
              fontWeight: "700",
              color: "#EEA20E",
              fontSize: "clamp(1rem, 1.8rem + 1.5vw, 2.8rem)",
            }}
          >
            Create Project
          </h4>
          <Col md={7}>
            <p className="normalPTag fw-medium text-center">
              The world needs builders like you to bring the future a
              thousand miles closer.
            </p>
          </Col>
          <div className="px-4 py-2 px-lg-5" style={offerStyle}>
            <span className="d-inline-flex justify-content-center align-items-center">
              <span className="normalPTag fw-medium">
                What are you building today?
              </span>
            </span>
          </div>
          <div className="w-w-100 text-center">
            <MediumSolidButton
              type="button"
              text="Create Project"
              onClick={handleCreateProject}
            />
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default CreateProject;
