import React, { useState } from "react";
import StickyNavbar from "../nav-bars/StickyNavbar";
import { Container, Image } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, resendOtp } from "../../store/auth/reducer";
import AppSpinner from "../atoms/AppSpinner";
import images from "../../constants/images";

const OtpInputResend = () => {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const { user, requestStatus } = useSelector(selectAuth);
  const email = user?.email;

  const handleResendOtp = () => {
    dispatch(resendOtp(email));
  };

  const handlePaste = async (event) => {
    const data = event.clipboardData.getData("text");
    dispatch(activateAccount(data));
  };

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
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <Image
            src={images.authImage.src}
            alt={images.authImage.alt}
            width={54}
          />
          <h2
            className="strongH2Tag"
            style={{
              marginInlineStart: "5px",
            }}
          >
            Verification Code
          </h2>
        </div>

        <p className="pTagWidth90">
          Enter the 4 digit code sent to your registered email and phone number
          to access Buidl revolutionizing collaboration space
        </p>

        <span
          style={{
            color: "#ffffff",
            fontSize: "clamp(1rem, 0.87rem + 1.5vw, 1.3rem)",
          }}
          className="fw-bold"
        >
          Enter 4 digit OTP code
        </span>
        <br />

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              onPaste={handlePaste}
              renderSeparator={<span>---</span>}
              renderInput={(props) => <input {...props} />}
            />
            <span
              className="normalPTag fs-5 text-decoration-underline"
              style={{
                color: "#EEA20E",
                cursor: "pointer",
              }}
              onClick={handleResendOtp}
            >
              Resend here
            </span>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OtpInputResend;
