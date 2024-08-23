import { Container, Card, Col, Row, Image } from "react-bootstrap";
import Teams from "../../../../assets/icons/teams.svg";
import ZeroPercent from "../../../../assets/icons/zero-percent.svg";
import { Link, useNavigate } from "react-router-dom";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import ProjectCard from "./project-card";

const AllProjects = ({ projects }) => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/creator/create-project");
  };
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  const headStyles = {
    padding: "1rem 1rem",
    borderBottom: "1px solid #565F87",
    color: "#FFFFFF",
  };

  return (
    <Container>
      <Card style={cardBody}>
        <Card.Header
          style={headStyles}
          className="d-flex justify-content-between align-items-center"
        >
          <h4
            style={{
              fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.56rem)",
            }}
          >
            All
          </h4>
          <div>
            <MediumSolidButton
              type="button"
              text="Create Project"
              style={{
                width: "9rem",
                margin: "0",
              }}
              onClick={handleCreateProject}
            />
          </div>
        </Card.Header>
        <Card.Body className="px-0 py-0">
          <Row className="m-0 g-4 pb-5">
            {projects.map((project, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AllProjects;
