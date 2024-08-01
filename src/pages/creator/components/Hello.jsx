import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../store/auth/reducer";

const Hello = () => {
  const { user } = useSelector(selectAuth);
  const firstName = user?.firstName;

  return (
    <Container>
      <Col>
        <h2
          style={{
            fontSize: "clamp(1rem, 1.8rem + 1.5vw, 2.8rem)",
            fontWeight: "800",
            color: "#ffffff",
          }}
        >
          Hello,
          <span style={{ color: "#EEA20E" }}> {firstName || "Jackson"}</span>
        </h2>
        <Col lg={6}>
          <p
            className="normalPTag"
            style={{
              fontWeight: "600",
            }}
          >
            Welcome to Buidl, your AI-powered workspace, and job marketplace.
            Collaborate seamlessly! Find the right talents!
          </p>
        </Col>
      </Col>
    </Container>
  );
};

export default Hello;
