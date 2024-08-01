import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";
import StickyNavbar from "../nav-bars/StickyNavbar";
import InputLabel from "../ui/inputs/LabelInput";
import { logInUser, getProfile } from "../../store/auth/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/reducer";
import FullSolidButton from "../ui/buttons/FullSolidButton";
import AppSpinner from "../atoms/AppSpinner";
import PasswordInput from "../ui/inputs/PasswordInput";
// import OtpInputResend from "../verifications/InputOtpResend";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { requestStatus, user } = useSelector(selectAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginCredentials = {
      email,
      password,
    };

    // Await the completion of logInUser before proceeding
    await dispatch(logInUser(loginCredentials)).unwrap();
    // Now that logInUser is done, dispatch getProfile
    dispatch(getProfile());
  };

  // const is_activated = user?.is_activated;

  // if (!is_activated) {
  //   return <OtpInputResend />;
  // } else {
  //   navigate("/creator/dashboard");
  // }

  const sectionStyle = {
    paddingBottom: 5 + "rem",
  };

  if (requestStatus === "loading") {
    return <AppSpinner />;
  }

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section
        className="firstSectionPadding w-100 d-flex flex-column align-items-center justify-content-start text-start"
        style={sectionStyle}
      >
        <div>
          <h2 className="strongH2Tag">Login as</h2>
          <p className="normalPTag">
            Login on Buidl to enjoy the revolutionizing collaboration space
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

            <Row>
              <PasswordInput
                label="Password"
                id="password"
                name="password"
                required={true}
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />

              <span
                className="normalPTag"
                style={{
                  paddingTop: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                Forget Password?{" "}
                <Link to="/auth/forget-password">
                  <span
                    style={{ color: "#EEA20E", textDecoration: "underline" }}
                  >
                    Reset here
                  </span>
                </Link>
              </span>
            </Row>
            <br />
            <br />
            <FullSolidButton
              type="submit"
              text="Login"
              disabled={!email || !password}
            />
            <br />
            <br />
            <span
              style={{
                color: "#ffffff",
                fontSize: "clamp(1rem, 0.87rem + 1.5vw, 1.1rem)",
              }}
            >
              Don't have an Account?{" "}
              <Link to="/">
                <span style={{ color: "#EEA20E", textDecoration: "underline" }}>
                  Register here
                </span>
              </Link>
            </span>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default LoginForm;
