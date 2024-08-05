import { Container, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Spinners = () => {
  const bodyStyles = {
    backgroundColor: "rgba(39, 42, 56, 0.79)",
    zIndex: "50",
  };
  const divStyles = {
    padding: "7rem 3rem",
    maxWidth: "350px",
    borderRadius: "13px",
    background: "#1A1C28",
    color: "#EEA20E",
  };

  return (
    <Container
      fluid
      style={bodyStyles}
      className="position-fixed m-auto min-vh-100"
    >
      <section className="min-vh-100 d-flex justify-content-center align-items-center">
        <div
          style={divStyles}
          className="m-auto d-flex flex-column align-items-center gap-2 text-center "
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <span className="normalPTag">
            Build AI analyzing to create project...
          </span>
        </div>
      </section>
    </Container>
  );
};

export default Spinners;
