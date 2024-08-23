import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";

const ProjectBasicDetails = ({ project }) => {
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  const cardHeader = {
    borderBottom: "1px solid #565F87",
  };

  const buttonStyles = {
    width: "10rem",
    borderRadius: "20rem",
    margin: "0",
  };

  const smallStyles = {
    color: "#999999",
  };

  const documentStyles = {
    color: "#889CFF",
  };

  const needRoleStyles = {
    backgroundColor: "#373E5F",
    borderRadius: 31 + "px",
    padding: "9px 30px",
  };

  return (
    <Col md={12} lg={8}>
      <div style={cardBody} className="pb-5">
        <div
          style={cardHeader}
          className="d-flex justify-content-between align-items-center p-4"
        >
          <h4 className="useAppWhite fs-4 fw-semibold">Project Description</h4>
          <div>
            <Link
              to={`/creator/project/info/${project.id}`}
              style={{ textDecoration: "none" }}
            >
              <MediumSolidButton
                type="button"
                text="View Project Info"
                style={buttonStyles}
              />
            </Link>
          </div>
        </div>
        <div className="useAppWhite d-flex flex-column gap-5 p-4">
          <div>
            <small style={smallStyles} className="fs-5 fw-bold">
              Project Title
            </small>
            <h4 className="mb-0 fs-2 fw-bolder">{project.title}</h4>
          </div>
          <div>
            <small style={smallStyles} className="fs-5 fw-bold">
              Project Description
            </small>
            <p className="normalPTag mb-0 fw-medium">
              {project.description}{" "}
              {/* {
                "At [Company Name], we're passionate about delivering exceptional products and experiences that enrich our customers' lives. With a commitment to quality, innovation, and customer satisfaction, we strive to be the leader in our industry and make a positive impact on the world around us."
              } */}
            </p>
          </div>
          <div>
            <small style={smallStyles} className="fs-5 fw-bold">
              Project Documents
            </small>
            <div className="d-flex flex-column">
              {projectDocuments.map(({ document }, index) => {
                return (
                  <span
                    key={index}
                    style={documentStyles}
                    className="normalPTag fw-medium"
                  >
                    {document}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <small style={smallStyles} className="fs-5 fw-bold">
              Needed Role
            </small>
            <div className="d-flex gap-2 flex-wrap pt-2">
              {neededRoles.map(({ role }, index) => {
                return (
                  <span
                    key={index}
                    style={needRoleStyles}
                    className="normalPTag fw-medium"
                  >
                    {role}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectBasicDetails;

const projectDocuments = [
  { document: "Document_Case_Study.pdf" },
  { document: "Userstory.pdf" },
  { document: "ProductConcept.pdf" },
];

const neededRoles = [
  { role: "Graphic Designer" },
  { role: "Video Editor" },
  { role: "Illustrator" },
  { role: "Brand Designer" },
  { role: "Frontend Developer" },
  { role: "Backend Developer" },
  { role: "AI Engineer" },
];
