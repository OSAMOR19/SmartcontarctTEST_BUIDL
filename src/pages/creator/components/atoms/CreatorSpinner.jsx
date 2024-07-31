import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import CreatorLayout from "../layouts";

const CreatorSpinner = () => {
  return (
    <Container
      fluid
      className="App"
      style={{ backgroundColor: "#272A38", position: "relative" }}
    >
      <CreatorLayout />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "#E0DDDD",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span>Wait a moment</span>
      </div>
    </Container>
  );
};

export default CreatorSpinner;
