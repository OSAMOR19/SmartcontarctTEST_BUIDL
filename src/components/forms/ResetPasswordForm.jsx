import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import StickyNavbar from "../nav-bars/StickyNavbar";
import PasswordInput from "../ui/inputs/PasswordInput";
import FullSolidButton from "../ui/buttons/FullSolidButton";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [passwordMatch, setPasswordMatch] = useState(false);

  // states to track password requirements met
  const [isLengthMet, setIsLengthMet] = useState(false);
  const [isLowerCaseMet, setIsLowerCaseMet] = useState(false);
  const [isSpecialCharMet, setIsSpecialCharMet] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // check the format of the password using a regular expression
    const passwordValue = e.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^&*()]).{8,20}$/;
    setIsPasswordValid(passwordRegex.test(passwordValue));

    // Check individual requirements
    setIsLengthMet(passwordValue.length >= 8);
    setIsLowerCaseMet(/[a-z]/.test(passwordValue));
    setIsSpecialCharMet(/[!@#$%^&*()]/.test(passwordValue));
  };

  const handleConfirmPassword = (e) => {
    const passwordValue = e.target.value;
    // Immediately check if the passwords match
    if (passwordValue !== password && passwordValue !== "") {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
    setConfirmPassword(passwordValue);
  };

  // Check if password and confirm password match
  const isMatching = password === confirmPassword;

  // Determine if the button should be disabled
  const isButtonDisabled = !(isPasswordValid && isMatching);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(password);
  };

  const sectionStyle = {
    paddingBottom: "5rem",
  };

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section
        className="firstSectionPadding w-100 d-flex flex-column align-items-center justify-content-start text-start"
        style={sectionStyle}
      >
        <div>
          <h2 className="strongH2Tag">Reset Password</h2>
          <p className="normalPTag">
            Buidl to enjoy the revolutionizing collaboration space
          </p>

          <Form onSubmit={handleSubmit}>
            <Row>
              <PasswordInput
                label="Password"
                id="password"
                name="password"
                required={true}
                placeholder="Set password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Row>
            <Col className="">
              {isLengthMet && isLowerCaseMet && isSpecialCharMet ? (
                ""
              ) : (
                <div style={{ paddingTop: "0.5rem" }}>
                  <span className="normalPTag fw-medium">
                    Must Contain at least
                  </span>
                </div>
              )}
              <ul className="normalPTag" style={{ fontSize: "1.2rem" }}>
                {!isLengthMet && <li>8 characters</li>}
                {!isLowerCaseMet && <li>1 lower case character</li>}
                {!isSpecialCharMet && <li>1 special character</li>}
              </ul>
            </Col>

            <Row>
              <div
                style={{
                  marginTop: "-0.8rem",
                }}
              >
                <PasswordInput
                  label="Confirm Password"
                  id="password"
                  name="password"
                  required={true}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                />
                {!passwordMatch ? (
                  ""
                ) : (
                  <span className="normalPTag fw-medium">
                    Password does not match
                  </span>
                )}
              </div>
            </Row>

            <br />
            <br />
            <FullSolidButton
              type="submit"
              disabled={isButtonDisabled}
              text="Reset"
            />
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default ResetPasswordForm;
