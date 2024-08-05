import { Container, Col } from "react-bootstrap";
import LogOutCaution from "../../assets/icons/logout-caution.svg";
import MediumSolidButton from "../ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../ui/buttons/MediumOutlineButton";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth/reducer";
import { useNavigate } from "react-router-dom";

const LogOutModal = ({ showLogout, setShowLogout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowLogout(false);
    navigate("/auth/login");
  };

  const bodyStyles = {
    backgroundColor: "rgba(39, 42, 56, 0.79)",
    display: `${showLogout ? "block" : "none"}`,
    zIndex: "50",
  };

  const divStyles = {
    padding: "2rem",
    background: "#21232F",
    borderRadius: "8.43px",
    maxWidth: "457px",
    margin: "auto",
  };

  return (
    <Container fluid className="position-fixed" style={bodyStyles}>
      <section className="min-vh-100 d-flex justify-content-center align-items-center">
        <div
          className="d-flex flex-column align-items-center gap-4"
          style={divStyles}
        >
          <div>
            <LogOutCaution />
          </div>
          <h5
            style={{
              color: "#ffffff",
            }}
            className="fw-bold"
          >
            Are you sure you want to Log out
          </h5>
          <div>
            <div className="d-flex gap-3">
              <MediumOutlineButton
                type="button"
                text="No"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={() => setShowLogout(false)}
              />
              <MediumSolidButton
                type="button"
                text="Yes"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LogOutModal;
