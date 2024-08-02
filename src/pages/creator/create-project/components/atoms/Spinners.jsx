import { Container, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Spinners = () => {
  const bodyStyles = {
    backgroundColor: "rgba(39, 42, 56, 0.79)",
    position: "fixed",
    margin: "auto",
    minHeight: "100vh",
    paddingTop: "10rem",
    zIndex: 50,
  };
  const divStyles = {
    margin: "auto",
    padding: "7rem 3rem",
    maxWidth: "350px",
    borderRadius: "13px",
    background: "#1A1C28",
    color: "#EEA20E",
  };

  return (
    <Container fluid style={bodyStyles}>
      <div
        style={divStyles}
        className="text-center d-flex flex-column align-items-center gap-2"
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span className="normalPTag">
          Build AI analyzing to create project...
        </span>
      </div>
    </Container>
    // </Col>
  );
};

export default Spinners;
