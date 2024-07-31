import { Container, Card, Col, Row, Image } from "react-bootstrap";
import Rating from "../../../../assets/icons/rating.svg";
import images from "../../../../constants/images";

const Applicants = () => {
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  return (
    <Col lg={4}>
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
            Teams
          </h4>
        </Card.Header>
        <Card.Body className="px-4 py-4">
          <Row className="g-2">
            <Col>
              <div
                style={{
                  width: "100%",
                  color: "#FFFFFF",
                  background: "#404356",
                  fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.125rem)",
                  borderRadius: "12px",
                }}
              >
                <div className="d-flex gap-2 align-items-center px-4 py-2">
                  <Image
                    src={images.charlesImage.src}
                    alt={images.charlesImage.alt}
                    width={60}
                  />
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                    className="d-flex flex-column gap-0 align-align-items-start"
                  >
                    <h6
                      className="m-0"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      Charles Victor
                    </h6>
                    <span
                      style={{
                        marginTop: "-0.5rem",
                      }}
                    >
                      <Rating /> <small>5.0 Rating - 2 Jobs</small>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "100%",
                  color: "#FFFFFF",
                  background: "#404356",
                  fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.125rem)",
                  borderRadius: "12px",
                }}
              >
                <div className="d-flex gap-2 align-items-center px-4 py-2">
                  <Image
                    src={images.charlesImage.src}
                    alt={images.charlesImage.alt}
                    width={60}
                  />
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                    className="d-flex flex-column gap-0 align-align-items-start"
                  >
                    <h6
                      className="m-0"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      Charles Victor
                    </h6>
                    <span
                      style={{
                        marginTop: "-0.5rem",
                      }}
                    >
                      <Rating /> <small>5.0 Rating - 2 Jobs</small>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Applicants;
