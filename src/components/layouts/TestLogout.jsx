import React from "react";
import { Container } from "react-bootstrap";

const TestLogout = () => {
  return (
    <Container fluid>
      <div className="position-relative">
        <div
          className="position-absolute opacity-75"
          style={{
            background: "red",
            minWidth: "100%",
            minHeight: "100vh",
          }}
        >
          <div className="position-relative">
            <Container>
              <div
                // className="position-absolute"
                // style={{
                //   top: "10%",
                //   right: "20%",
                // }}
              >
                <h2 className="strongH2Tag">Register as a Founder</h2>
                <p className="normalPTag">
                  Register on Buidl to enjoy the revolutionizing collaboration
                  space
                </p>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestLogout;
