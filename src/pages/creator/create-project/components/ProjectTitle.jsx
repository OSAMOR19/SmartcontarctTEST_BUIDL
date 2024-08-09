import { useState } from "react";
import { Container, Col } from "react-bootstrap";
import LineProgressOne from "../../../../assets/icons/line-progress1.svg";
import InputLabel from "../../../../components/ui/inputs/LabelInput";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import LabelTextarea from "../../../../components/ui/textareas/LabelTextarea";
import LabelSelect from "../../../../components/ui/selects/LabelSelect";
import CustomRequired from "./ui/CustomRequired";

const ProjectTitle = ({
  title,
  handleTitleChange,
  duration,
  handleDurationSelectChange,
  projectDescription,
  handleProjectDescriptionChange,
  onNext,
}) => {
  // const [duration, setDuration] = useState("");

  const selectDuration = [
    { value: "", label: "Select project duration" },
    { value: "1", label: "1 month" },
    { value: "2", label: "2 month" },
    { value: "3", label: "3 month" },
    { value: "4", label: "4 month" },
    { value: "5", label: "5 month" },
    { value: "6", label: "6 month" },
  ];

  // const handleSelectChange = (e) => {
  //   setDuration(e.target.value);
  // };

  const bodyStyles = {
    paddingBottom: "5rem",
  };

  const colStyles = {
    background: "#272A38",
    padding: "1rem",
    paddingBottom: "10rem",
    borderRadius: 14 + "px",
  };

  return (
    <Container style={bodyStyles}>
      <Col style={colStyles}>
        <div className="d-flex flex-column align-items-center justify-content-center">
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
              <div className="pt-4">
                <InputLabel
                  label={<CustomRequired text="Project title" />}
                  id="projectTitle"
                  name="projectTitle"
                  type="text"
                  required={true}
                  placeholder="Enter your project title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>

              <LabelSelect
                label={<CustomRequired text="Project Duration" />}
                id="projectDuration"
                name="projectDuration"
                options={selectDuration}
                value={duration}
                onChange={handleDurationSelectChange}
              />

              <LabelTextarea
                label="Project Description"
                value={projectDescription}
                onChange={handleProjectDescriptionChange}
                id="jobDescription"
                placeholder="Enter your project description"
                rows={3}
              />
            </div>
            <div className="d-flex pt-5 align-items-center flex-wrap justify-content-between">
              <MediumSolidButton
                disabled={!title || !duration}
                type="button"
                text="Next"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={onNext}
              />
              <span
                className="normalPTag fw-medium"
                style={{
                  color: "#EEA20E",
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
