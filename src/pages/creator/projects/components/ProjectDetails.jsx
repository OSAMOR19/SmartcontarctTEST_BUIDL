import { Container, Card, Col, Row } from "react-bootstrap";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";

const ProjectDetails = () => {
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  return (
    <Container
      style={{
        paddingTop: "6rem",
      }}
    >
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
        <Card.Body className="px-0 py-0">
          <div>
            <small>Project Title</small>
            <h4>Shopify e-cormmerce System</h4>
          </div>
          <div>
            <small>Project Description</small>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eget euismod enim urna in
              eget tincidunt. Aliquet vel tincidunt. Lorem ipsum dolor sit amet
              consectetur. dolor sit amet consectetur. Lorem ipsum dolor sit
              amet consectetur. Eget euismod enim urna in eget tincidunt.
              Aliquet vel tincidunt. Lorem ipsum dolor sit amet consectetur.
              dolor sit amet consectetur.{" "}
            </p>
          </div>
          <div>
            <small> Project Documents</small>
            <div>
              <span
                style={{
                  color: "#889CFF",
                }}
              >
                Document_Case_Study.pdf
              </span>
              <span
                style={{
                  color: "#889CFF",
                }}
              >
                Document_Case_Study.pdf
              </span>
              <span
                style={{
                  color: "#889CFF",
                }}
              >
                Document_Case_Study.pdf
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetails;
