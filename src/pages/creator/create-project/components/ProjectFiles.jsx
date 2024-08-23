import { Container, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import LineProgress2 from "../../../../assets/icons/line-progress2.svg";
import UploadFiles from "../../../../assets/icons/upload-files.svg";
import Caution from "../../../../assets/icons/caution.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";
import useNavigateOnSuccess from "../useNavigateOnSuccess";
import { useSelector } from "react-redux";
import { selectProject } from "../../../../store/projects/reducer";
import Spinners from "./atoms/Spinners";

const ProjectFiles = ({
  onNext,
  onPrev,
  onFilesAccepted,
  filesHelper,
  handleCreateProject,
}) => {
  useNavigateOnSuccess("createSuccessFull", "/creator/dashboard");

  const { requestStatus } = useSelector(selectProject);

  const handleSaveAndContinueLater = () => {
    if (filesHelper.length > 0) {
      handleCreateProject();
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Call the passed callback prop with the accepted files
      onFilesAccepted(acceptedFiles);
    },
  });

  const files = filesHelper.map((file) => (
    <li key={file.path}>
      {file.path} -{" "}
      <span
        style={{
          color: "#EEA20E",
        }}
      >
        {file.size} bytes
      </span>
    </li>
  ));

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
    <>
      {requestStatus === "loading" && <Spinners showSpinner={true} />}
      <Container style={bodyStyles}>
        <Col style={colStyles}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div style={{ width: 100 + "%" }} className="centerForm">
              <Row style={{ width: 100 + "%" }}>
                <div>
                  <h2 className="strongH2Tag">Project Details</h2>
                  <p className="normalPTag">
                    Upload your project documents to give your team full access
                    to all information, ensuring they stay informed and can
                    provide valuable feedback.
                  </p>
                  <LineProgress2 />
                </div>
              </Row>

              <div className="pt-4">
                <h4
                  className="normalPTag fw-medium"
                  style={{
                    padding: "1.2rem 0rem",
                    fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.5rem)",
                  }}
                >
                  Upload Project Files
                </h4>
                <div className="normalPTag">
                  <div className="fw-medium">
                    <Caution />
                    <span className="ps-1">
                      Upload or Drag and drop the following files
                    </span>
                  </div>
                  <ul>
                    <li>Whitepaper or Business Case Doc</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <section className="container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <div className="d-flex flex-column align-items-center text-start justify-content-start w-100 gap-2 p-4">
                      <span>
                        <UploadFiles />
                      </span>
                      <p className="normalPTag text-center">
                        <span
                          style={{
                            color: "#889CFF",
                            cursor: "pointer",
                          }}
                        >
                          Click to Upload{" "}
                        </span>
                        or drag and drop files here{" "}
                      </p>
                    </div>
                  </div>
                  <aside className="normalPTag pt-3">
                    <ul>{files}</ul>
                  </aside>
                </section>
              </div>

              <div className="pt-4 d-flex flex-wrap gap-4 align-items-center justify-content-between">
                <div className="d-flex gap-3">
                  <MediumOutlineButton
                    type="button"
                    text="Previous"
                    style={{
                      marginTop: "0rem",
                      width: "6rem",
                    }}
                    onClick={onPrev}
                  />
                  <MediumSolidButton
                    disabled={!filesHelper.length > 0}
                    type="button"
                    text="Next"
                    style={{
                      marginTop: "0rem",
                      width: "6rem",
                    }}
                    onClick={onNext}
                  />
                </div>
                <span
                  onClick={handleSaveAndContinueLater}
                  className="normalPTag fw-medium"
                  style={{
                    color: "#EEA20E",
                    cursor: filesHelper.length > 0 ? "pointer" : "",
                    opacity: filesHelper.length > 0 ? 1 : 0.5,
                  }}
                >
                  Save & Continue later
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default ProjectFiles;
