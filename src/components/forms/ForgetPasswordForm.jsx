import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";
import StickyNavbar from "../nav-bars/StickyNavbar";
import InputLabel from "../ui/inputs/LabelInput";
import FullSolidButton from "../ui/buttons/FullSolidButton";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email);
  };

  const sectionStyle = {
    paddingBottom: 5 + "rem",
  };

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section
        className="firstSectionPadding w-100 d-flex flex-column align-items-center justify-content-start text-start"
        style={sectionStyle}
      >
        <div>
          <h2 className="strongH2Tag">Forget Password</h2>
          <p className="normalPTag">
            Buidl to enjoy the revolutionizing collaboration space
          </p>

          <Form onSubmit={handleSubmit}>
            <Row>
              <InputLabel
                label="Email Address"
                id="emailUsername"
                name="emailUsername"
                type="text"
                required={true}
                placeholder="Email address or username"
                value={email}
                onChange={handleEmailChange}
              />
            </Row>

            <br />
            <br />
            <FullSolidButton type="submit" text="Send" disabled={!email} />
            <br />
            <br />
            <span
              style={{
                color: "#ffffff",
                fontSize: "clamp(1rem, 0.87rem + 1.5vw, 1.1rem)",
              }}
            >
              Remember Password ?{" "}
              <Link to="/">
                <span style={{ color: "#EEA20E", textDecoration: "underline" }}>
                  Sign in here
                </span>
              </Link>
            </span>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default ForgetPasswordForm;
