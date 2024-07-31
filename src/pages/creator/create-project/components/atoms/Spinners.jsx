import { Container, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Spinners = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "rgba(39, 42, 56, 0.79)",
        position: "fixed",
        margin: "auto",
        minHeight: "100vh",
        paddingTop: "10rem",
        zIndex: 50,
      }}
    >
      <div
        style={{
          margin: "auto",
          padding: "7rem 3rem",
          maxWidth: "350px",
          textAlign: "center",
          borderRadius: "13px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          background: "#1A1C28",
          color: "#EEA20E",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span className="normalPTag">Build AI analyzing to create project...</span>
      </div>
    </Container>
    // </Col>
  );
};

export default Spinners;
