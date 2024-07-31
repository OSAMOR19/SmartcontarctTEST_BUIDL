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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 0.5 + "rem",
    textAlign: "center",
    width: "100%",
    paddingBottom: 5 + "rem",
  };

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section className="firstSectionPadding" style={sectionStyle}>
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
        <p
          className="normalPTag"
          style={{
            fontWeight: "600",
          }}
        >
          We have sent a Verification Code to <br />
          <span style={{ color: "#B6B6B6", fontWeight: "500" }}>{email}</span>
        </p>
        <MediumSolidButton
          type="button"
          text="I’ve received the code"
          onClick={handleButtonClick}
        />
        <span
          style={{
            paddingTop: "1rem",
          }}
          className="normalPTag"
        >
          Didn’t receive the email ? <br />
          <span
            style={{
              color: "#EEA20E",
              textDecoration: "underline",
              cursor: "pointer",
            }}
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
