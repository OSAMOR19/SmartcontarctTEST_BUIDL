import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "react-lite-input";
import { registerUser } from "../../store/auth/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/reducer";
import { Container, Form, Col, Row } from "react-bootstrap";
import StickyNavbar from "../nav-bars/StickyNavbar";
import AppSpinner from "../atoms/AppSpinner";
import InputLabel from "../ui/inputs/LabelInput";
import UsePhoneInput from "../ui/inputs/UsePhoneInput";
import PasswordInput from "../ui/inputs/PasswordInput";
import Checkbox from "../ui/inputs/Checkbox";
import FullSolidButton from "../ui/buttons/FullSolidButton";
import OtpSent from "../verifications/OtpSent";
// import useCustomNavigate from "../../hooks/useCustomNavigation";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { requestStatus } = useSelector(selectAuth);

  // get type from the url
  const location = useLocation();
  const selectedType = new URLSearchParams(location.search).get("type");

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedType !== "builder" && selectedType !== "freelancer") {
      navigate("/");
    }
  }, [selectedType]);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const initialValue = {
    firstName: "",
    lastName: "",
    username: "",
  };

  const { values, handleLiteChange } = useInput(initialValue);

  const [isChecked, setIsChecked] = useState({});

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // states to track password requirements met
  const [isLengthMet, setIsLengthMet] = useState(false);
  const [isLowerCaseMet, setIsLowerCaseMet] = useState(false);
  const [isSpecialCharMet, setIsSpecialCharMet] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // check the format of the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(e.target.value));
  };

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

  const handleCheckboxChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  const type = selectedType;

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = {
      ...values,
      email,
      phone,
      type,
      password,
      emailSubscription: isChecked["emailChecked"] || false,
    };

    dispatch(registerUser(registrationData));
  };

  if (requestStatus === "success") {
    return <OtpSent />;
  }

  if (requestStatus === "loading") {
    return <AppSpinner />;
  }

  const sectionStyle = {
    paddingBottom: "5rem",
  };

  return (
    <Container
      fluid
      className="App"
      style={{ backgroundColor: "#272A38", overflowX: "hidden" }}
    >
      <StickyNavbar />
      <section
        className="firstSectionPadding w-100 d-flex flex-column align-items-center justify-content-start text-start"
        style={sectionStyle}
      >
        <div>
          <h2 className="strongH2Tag">Register as a builder</h2>
          <p className="normalPTag">
            Register on Buidl to enjoy the revolutionizing collaboration space
          </p>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <InputLabel
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  required={true}
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleLiteChange}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <InputLabel
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  required={true}
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={handleLiteChange}
                />
              </Col>
            </Row>

            <Row>
              <InputLabel
                label="Email Address"
                id="emailAddress"
                name="emailAddress"
                type="email"
                required={true}
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </Row>

            <Row>
              <UsePhoneInput
                label="Phone Number"
                value={phone}
                onChange={setPhone}
              />
            </Row>

            <Row>
              <InputLabel
                label="Username"
                id="username"
                name="username"
                type="text"
                required={true}
                placeholder="Enter username"
                value={values.username}
                onChange={handleLiteChange}
              />
            </Row>

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
                  <span
                    className="normalPTag"
                    style={{
                      fontWeight: "500",
                    }}
                  >
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

            <div
              style={{
                maxWidth: 25 + "rem",
              }}
              className="pt-4 d-flex flex-column gap-3"
            >
              <Row>
                <Checkbox
                  label={
                    <span
                      className="normalPTag"
                      style={{
                        fontSize: "1.1rem",
                        maxWidth: "20%",
                      }}
                    >
                      Send me emails with tips on how to find talent that fits
                      my needs.
                    </span>
                  }
                  type="checkbox"
                  name="emailChecked"
                  checked={!!isChecked["emailChecked"]}
                  onChange={handleCheckboxChange}
                />
              </Row>

              <Row>
                <Checkbox
                  label={
                    <span
                      className="normalPTag"
                      style={{
                        fontSize: "1.1rem",
                        maxWidth: "90%",
                      }}
                    >
                      I have read, understood and I agree to Buidl’{" "}
                      <Link to="/">
                        <span
                          style={{
                            color: "#EEA20E",
                            cursor: "pointer",
                          }}
                          className="text-decoration-underline"
                        >
                          Privacy Policy
                        </span>
                      </Link>
                      , and{" "}
                      <Link to="">
                        <span
                          style={{
                            color: "#EEA20E",
                            cursor: "pointer",
                          }}
                          className="text-decoration-underline"
                        >
                          Terms and conditions.
                        </span>
                      </Link>
                    </span>
                  }
                  type="checkbox"
                  name="agreeChecked"
                  checked={!!isChecked["agreeChecked"]}
                  onChange={handleCheckboxChange}
                />
              </Row>
            </div>

            <br />
            <br />

            <FullSolidButton
              type="submit"
              disabled={
                !isEmailValid || !isPasswordValid || !isChecked["agreeChecked"]
              }
              text="Proceed"
            />

            <br />
            <br />

            <span
              className="normalPTag"
              style={{
                fontSize: "1.1rem",
                maxWidth: "20%",
              }}
            >
              Already have an Account?{" "}
              <Link to="/auth/login">
                <span
                  style={{
                    color: "#EEA20E",
                    cursor: "pointer",
                  }}
                  className="text-decoration-underline"
                >
                  Login here,
                </span>
              </Link>
            </span>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default RegisterForm;
