import { Container, Col, Row, Image } from "react-bootstrap";
import images from "../../../../constants/images";
import GiftBox from "../../../../assets/icons/gift-box.svg";
import { useNavigate } from "react-router-dom";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";

const CreateProject = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/creator/create-project");
  };
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const offerStyle = {
    border: "0.075rem solid #3F4561",
    borderRadius: "14px",
    textAlign: "center",
    color: "#ffffff",
    background: "#222532",
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
        <div style={divStyle}>
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
            <p
              className="normalPTag"
              style={{
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              The world needs builders like you to bring the future a
              thousand miles closer.
            </p>
          </Col>
          <div className="px-4 py-2 px-lg-5" style={offerStyle}>
            <span className="d-inline-flex justify-content-center align-items-center">
              {/* <GiftBox /> */}
              <span
                className="normalPTag"
                style={{
                  fontWeight: "500",
                  // marginInlineStart: "1rem",
                }}
              >
                What are you building today?
              </span>
            </span>
          </div>
          <div
            style={{
              width: 100 + "%",
              textAlign: "center",
            }}
          >
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
