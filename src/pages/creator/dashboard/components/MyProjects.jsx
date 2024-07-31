import { Container, Card, Col, Row, Image } from "react-bootstrap";
import ZeroPercent from "../../../../assets/icons/zero-percent.svg";
import { Link, useNavigate } from "react-router-dom";
import images from "../../../../constants/images";

const MyProjects = ({ projects }) => {
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate("/creator/projects");
  };

  return (
    <Container
      style={{
        paddingTop: "2rem",
      }}
    >
      <Card style={cardBody}>
        <Card.Header
          style={{
            padding: "1rem 1rem",
            borderBottom: "2px solid #565F87",
            color: "#FFFFFF",
          }}
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
            {projects.map(
              ({ id, title, description, duration, progress, team }, index) => (
                <Col xs={12} md={6} lg={4} key={index}>
                  <Link
                    to={`/creator/project/details/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "#FFFFFF",
                        background: "#222532",
                        fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.125rem)",
                        border: "1px solid #565F87",
                        borderRadius: "17px",
                      }}
                      className="px-3 py-3"
                    >
                      <div className="d-flex flex-column gap-3">
                        {title && (
                          <h4
                            className="normalPTag"
                            style={{
                              fontWeight: "700",
                            }}
                          >
                            {title}
                          </h4>
                        )}
                        {description && (
                          <p
                            className="normalPTag"
                            style={{
                              color: "#D1D1D1",
                            }}
                          >
                            {description}
                          </p>
                        )}

                        <div className="d-flex flex-column">
                          <span className="normalPTag">Duration</span>
                          {duration && (
                            <span
                              style={{
                                fontSize:
                                  "clamp(1rem, 0.87rem + 1.5vw, 1.12rem)",
                                color: "#FFFFFF",
                                fontWeight: "700",
                              }}
                            >
                              {duration}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            borderTop: "2px solid #565F87",
                            paddingTop: "1rem",
                          }}
                          className="d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <ZeroPercent />
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <Image
                              src={images.noTeam.src}
                              alt={images.noTeam.alt}
                              width={42}
                              height={42}
                            />
                            <span>0 Team</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              )
            )}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyProjects;

// const projects = [
//   {
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     progress: 0,
//     team: "+20 Team",
//   },
//   {
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     progress: 0,
//     team: "+20 Team",
//   },
//   {
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     // duration: "6 months",
//     progress: 0,
//     team: "+20 Team",
//   },
// ];
