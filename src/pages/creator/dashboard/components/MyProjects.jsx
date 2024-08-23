import { Container, Card, Col, Row, Image } from "react-bootstrap";
import ProjectCard from "../../components/project-card";

// const MyProjects = () => {
  const MyProjects = ({ projects }) => {
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
    <Container
      style={{
        paddingTop: "1.5rem",
      }}
    >
      <Card style={cardBody}>
        <Card.Header
          style={headStyles}
          className="d-flex justify-content-between align-content-center"
        >
          <h4
            style={{
              fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.56rem)",
            }}
          >
            My Projects
          </h4>
          {/* <span
            className="normalPTag"
            onClick={handleViewAllProjects}
            style={{
              cursor: "pointer",
            }}
          >
            See All
          </span> */}
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

export default MyProjects;

// const projects = [
//   {
//     id: "1",
//     title: "Shopify e-commerce System and yourmixJnr",
//     description: "",
//     duration: "",
//     progress: 0,
//     team: 0,
//     status: "draft",
//   },
//   {
//     id: "2",
//     title: "Shopify e-commerce System and Baba ara",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     progress: 0,
//     team: 0,
//     status: "completed",
//   },
//   {
//     id: "3",
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     progress: 1,
//     team: 1,
//     status: "completed",
//   },
//   {
//     id: "4",
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     progress: 2,
//     team: 10,
//     status: "completed",
//   },
// ];
