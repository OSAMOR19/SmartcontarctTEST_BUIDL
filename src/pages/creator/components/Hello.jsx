import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../store/auth/reducer";

const Hello = () => {
  const { user } = useSelector(selectAuth);
  const firstName = user?.firstName;

  const h2Styles = {
    fontSize: "clamp(1rem, 1.8rem + 1.5vw, 2.8rem)",
    fontWeight: "800",
    color: "#ffffff",
  };

  return (
    <Container>
      <Col>
        <h2 style={h2Styles}>
          Hello,
          <span style={{ color: "#EEA20E" }}> {firstName || "Jackson"}</span>
        </h2>
        <Col lg={6}>
          <p className="normalPTag fw-semibold">
            Welcome to Buidl, your AI-powered workspace, and job marketplace.
            Collaborate seamlessly! Find the right talents!
          </p>
        </Col>
      </Col>
    </Container>
  );
};

export default Hello;
