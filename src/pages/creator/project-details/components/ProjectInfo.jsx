import { Container, Card, Col, Row } from "react-bootstrap";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";

const ProjectInfo = ({ project }) => {
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  const smallStyles = {
    fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.2rem)",
    fontWeight: "700",
    color: "#999999",
  };

  const needRoleStyles = {
    backgroundColor: "#373E5F",
    borderRadius: 31 + "px",
    padding: "9px 30px",
    fontWeight: "600",
  };

  return (
    <Col md={12} lg={8}>
      <Card style={cardBody}>
        <Card.Header
          style={{
            padding: "1rem 1rem",
            borderBottom: "2px solid #565F87",
            color: "#FFFFFF",
          }}
          className="d-flex justify-content-between align-items-center"
        >
          <h4
            style={{
              fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.56rem)",
            }}
          >
            Project Description
          </h4>
          <div>
            <MediumOutlineButton
              type="button"
              text="Make Payment"
              style={{
                width: "9rem",
                borderRadius: "20rem",
                margin: "0",
              }}
            />
          </div>
        </Card.Header>
        <Card.Body
          style={{
            padding: "1rem 1rem",
            color: "#FFFFFF",
          }}
          className="d-flex flex-column gap-4"
        >
          <div>
            <small style={smallStyles}>Project Title</small>
            <h4
              style={{
                fontSize: "clamp(1rem, 0.8rem + 1.5vw, 2.1rem)",
              }}
            >
              {project.title}
            </h4>
          </div>
          {project?.description && (
            <div>
              <small style={smallStyles}>Project Description</small>
              <p
                className="normalPTag"
                style={{
                  fontWeight: "600",
                }}
              >
                {project.description}
              </p>
            </div>
          )}

          <div>
            <small style={smallStyles}> Project Documents</small>
            <div className="d-flex flex-column gap-2">
              <span
                className="normalPTag"
                style={{
                  color: "#889CFF",
                  fontWeight: "600",
                }}
              >
                Document_Case_Study.pdf
              </span>
              <span
                className="normalPTag"
                style={{
                  color: "#889CFF",
                  fontWeight: "600",
                }}
              >
                Document_Case_Study.pdf
              </span>
              <span
                className="normalPTag"
                style={{
                  color: "#889CFF",
                  fontWeight: "600",
                }}
              >
                Document_Case_Study.pdf
              </span>
            </div>
          </div>
          <div>
            <small style={smallStyles}>Needed Role</small>
            {/* <Col className="pt-2"> */}
            <div className="d-flex gap-2 flex-wrap pt-2">
              <span style={needRoleStyles} className="normalPTag">
                Graphic Designer
              </span>
              <span style={needRoleStyles} className="normalPTag">
                Frontend Developer
              </span>
              <span style={needRoleStyles} className="normalPTag">
                Backend Developer
              </span>
            </div>
            {/* </Col> */}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectInfo;
