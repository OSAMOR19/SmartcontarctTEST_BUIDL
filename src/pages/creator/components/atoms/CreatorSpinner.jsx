import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import CreatorLayout from "../layouts";

const CreatorSpinner = () => {
  const divStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#E0DDDD",
  };

  return (
    <Container
      fluid
      className="App"
      style={{ backgroundColor: "#272A38", position: "relative" }}
    >
      <CreatorLayout />
      <div
        style={divStyles}
        className="d-flex flex-column align-items-center gap-2"
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
