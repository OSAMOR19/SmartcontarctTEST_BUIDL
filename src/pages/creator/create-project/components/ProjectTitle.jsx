import { Container, Row, Col } from "react-bootstrap";
import LineProgressOne from "../../../../assets/icons/line-progress1.svg";
import InputLabel from "../../../../components/ui/inputs/LabelInput";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";

const ProjectTitle = ({
  onNext,
  title,
  handleTitleChange,
  projectDescription,
  handleProjectDescriptionChange,
}) => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const nextContinue = {
    display: "flex",
    paddingTop: "3rem",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const textAreaBody = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    fontWeight: "500",
    border: "0",
    width: 100 + "%",
    padding: 1 + "rem",
    borderRadius: 8 + "px",
    outline: "none",
    boxShadow: "none",
  };

  return (
    <Container
      style={{
        paddingTop: "7rem",
        paddingBottom: "5rem",
      }}
    >
      <Col
        style={{
          background: "#272A38",
          padding: "1rem",
          paddingTop: "1rem",
          paddingBottom: "10rem",
          borderRadius: 14 + "px",
        }}
      >
        <div style={divStyle}>
          <div style={{ width: 100 + "%" }} className="centerForm">
            <div>
              <h2 className="strongH2Tag">Project Details</h2>
              <p className="normalPTag">
                Create diverse projects and collaborate seamlessly with your
                team using AI. Buidl welcomes all genres of projects, from
                entertainment and dApps to content creation and more!
              </p>
              <LineProgressOne />
            </div>

            <div className="d-flex flex-column gap-4">
              <div
                style={{
                  paddingTop: "2rem",
                }}
              >
                <InputLabel
                  label="Project Title"
                  id="projectTitle"
                  name="projectTitle"
                  type="text"
                  required={true}
                  placeholder="Enter your project title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>

              <div>
                <textarea
                  value={projectDescription}
                  onChange={handleProjectDescriptionChange}
                  style={textAreaBody}
                  name="jobDescription"
                  id="jobDescription"
                  placeholder="Enter your project description"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div style={nextContinue}>
              <MediumSolidButton
                type="button"
                text="Next"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={onNext}
              />
              <span
                className="normalPTag"
                style={{
                  color: "#EEA20E",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={onNext}
              >
                Save & Continue later
              </span>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default ProjectTitle;
