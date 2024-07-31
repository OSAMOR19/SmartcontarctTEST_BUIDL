import React, { useEffect, useState } from "react";
import StickyNavbar from "../nav-bars/StickyNavbar";
import { Container, Image } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/reducer";
import { activateAccount } from "../../store/auth/reducer";
import AppSpinner from "../atoms/AppSpinner";
import images from "../../constants/images";

function InputOtp() {
  const dispatch = useDispatch();
  const { requestStatus } = useSelector(selectAuth);
  const [otp, setOtp] = useState("");

  const handleOtpChange = () => {
    if (otp.length === 4) {
      dispatch(activateAccount(otp));
    }
  };

  useEffect(() => {
    handleOtpChange();
  }, [otp]);

  const handlePaste = async (event) => {
    const data = event.clipboardData.getData("text");
    dispatch(activateAccount(data));
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

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
  };

  if (requestStatus === "loading") {
    return <AppSpinner />;
  }

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section className="firstSectionPadding" style={sectionStyle}>
        <div style={divStyle}>
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
            fontWeight: "700",
          }}
        >
          Enter 4 digit OTP code
        </span>
        <br />

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            onPaste={handlePaste}
            renderSeparator={<span>---</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </section>
    </Container>
  );
}

export default InputOtp;
