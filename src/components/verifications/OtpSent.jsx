import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image, Fade } from "react-bootstrap";
import StickyNavbar from "../nav-bars/StickyNavbar";
import images from "../../constants/images";
import MediumSolidButton from "../ui/buttons/MediumSolidButton";
import { selectAuth, resendOtp } from "../../store/auth/reducer";
import { useSelector, useDispatch } from "react-redux";

const OtpSent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const email = user?.email;

  const handleResendOtp = () => {
    dispatch(resendOtp(email));
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/auth/verification");
  };

  const sectionStyle = {
    paddingBottom: 5 + "rem",
  };

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section
        className="firstSectionPadding w-100 d-flex flex-column gap-2 align-items-center justify-content-start text-center"
        style={sectionStyle}
      >
        <Image
          src={images.verificationImage.src}
          alt={images.verificationImage.alt}
          width={130}
        />
        <h2
          className="strongH2Tag"
          style={{
            fontSize: "clamp(1rem, 1.8rem + 1.5vw, 2rem)",
            color: "#EEA20E",
          }}
        >
          Verification Code Sent
        </h2>
        <p className="normalPTag fw-semibold">
          We have sent a Verification Code to <br />
          <span
            style={{ color: "#B6B6B6", fontWeight: "500" }}
            className="fw-medium"
          >
            {email}
          </span>
        </p>
        <MediumSolidButton
          type="button"
          text="I’ve received the code"
          onClick={handleButtonClick}
        />
        <span className="normalPTag pt-3">
          Didn’t receive the email ? <br />
          <span
            style={{
              color: "#EEA20E",
              cursor: "pointer",
            }}
            className="text-decoration-underline"
            onClick={handleResendOtp}
          >
            Resend here
          </span>
        </span>
      </section>
    </Container>
  );
};

export default OtpSent;
