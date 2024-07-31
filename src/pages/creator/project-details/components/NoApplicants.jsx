import { Container, Card, Col, Row, Image } from "react-bootstrap";
import Empty from "../../../../assets/icons/empty.svg";

const NoApplicants = () => {
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
            Applicants
          </h4>
        </Card.Header>
        <Card.Body className="px-0 py-0">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              padding: "4rem 1rem",
            }}
          >
            <Empty />
            <h2
              style={{
                fontSize: "clamp(0.8rem, 1.8rem + 1.5vw, 1.8rem)",
                color: "#EEA20E",
                fontWeight: "600",
              }}
            >
              No Applicant Yet
            </h2>
            <Col className="text-center">
              <p
                className="normalPTag"
                style={{
                  fontWeight: "600",
                }}
              >
                This Project “Shopify e-commerce system has Zero Applicant
              </p>
            </Col>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NoApplicants;
