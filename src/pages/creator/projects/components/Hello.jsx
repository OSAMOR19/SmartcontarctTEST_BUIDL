import React from "react";
import { Container, Col } from "react-bootstrap";
import { selectAuth } from "../../../../store/auth/reducer";
import { useSelector } from "react-redux";

const Hello = () => {
  const { user } = useSelector(selectAuth);
  const firstName = user?.firstName;

  return (
    <Container
      style={{
        paddingTop: "6rem",
      }}
    >
      <Col>
        <h2
          style={{
            fontSize: "clamp(1rem, 1.8rem + 1.5vw, 2.8rem)",
            fontWeight: "800",
            color: "#ffffff",
          }}
        >
          Hello,{" "}
          <span style={{ color: "#EEA20E" }}> {firstName || "Jackson"}</span>
        </h2>
        <p
          className="normalPTag"
          style={{
            fontWeight: "600",
          }}
        >
          Welcome to the revolutionizing collaboration space
        </p>
      </Col>
    </Container>
  );
};

export default Hello;
