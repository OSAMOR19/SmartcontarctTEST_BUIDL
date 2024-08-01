import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import LineProgress2 from "../../../../assets/icons/line-progress2.svg";
import UploadFiles from "../../../../assets/icons/upload-files.svg";
import Caution from "../../../../assets/icons/caution.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";

const ProjectFiles = ({ onNext, onPrev, onFilesAccepted }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Call the passed callback prop with the accepted files
      onFilesAccepted(acceptedFiles);
    },
  });

  const files = acceptedFiles.map((file) => (
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

  return (
    <Container
      style={{
        paddingBottom: "5rem",
      }}
    >
      <Col
        style={{
          background: "#272A38",
          padding: "1rem",
          paddingBottom: "10rem",
          borderRadius: 14 + "px",
        }}
      >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div style={{ width: 100 + "%" }} className="centerForm">
            <Row style={{ width: 100 + "%" }}>
              <div>
                <h2 className="strongH2Tag">Project Details</h2>
                <p className="normalPTag">
                  Upload your project documents to give your team full access to
                  all information, ensuring they stay informed and can provide
                  valuable feedback.
                </p>
                <LineProgress2 />
              </div>
            </Row>

            <div
              style={{
                paddingTop: "2rem",
                color: "white",
              }}
            >
              <h4
                className="normalPTag"
                style={{
                  padding: "1.2rem 0rem",
                  fontWeight: "500",
                  fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.5rem)",
                }}
              >
                Upload Project Files
              </h4>
              <div className="normalPTag">
                <div
                  style={{
                    fontWeight: "500",
                  }}
                >
                  <Caution />{" "}
                  <span
                    style={{
                      paddingInlineStart: "0.2rem",
                    }}
                  >
                    Upload or Drag and drop the following files
                  </span>
                </div>
                <ul>
                  <li>Whitepaper or Business Case Doc</li>
                  {/* <li>Product Concept and Features</li> */}
                  {/* <li>User Story or Case Study</li> */}
                </ul>
              </div>
            </div>

            <div
              style={{
                paddingTop: "2rem",
              }}
            >
              <section className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <div className="d-flex flex-column align-items-center text-start justify-content-start w-100 gap-2 p-4">
                    <span>
                      <UploadFiles />
                    </span>
                    <p
                      className="normalPTag"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#889CFF",
                        }}
                      >
                        Click to Upload
                      </span>{" "}
                      or drag and drop files here{" "}
                    </p>
                  </div>
                </div>
                <aside
                  style={{
                    marginTop: "0.5rem",
                  }}
                  className="normalPTag"
                >
                  <ul>{files}</ul>
                </aside>
              </section>
            </div>

            <div className="stepsTouch d-flex pt-5 align-items-center flex-wrap justify-content-between">
              <div className="d-flex gap-2">
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
                  type="button"
                  text="Next"
                  style={{
                    marginTop: "0rem",
                    width: "6rem",
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    onNext();
                  }}
                />
              </div>
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

export default ProjectFiles;
