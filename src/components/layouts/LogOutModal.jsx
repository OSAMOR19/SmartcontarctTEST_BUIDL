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

  return (
    <Container
      fluid
      className=" position-fixed"
      style={{
        backgroundColor: "rgba(39, 42, 56, 0.79)",
        display: `${showLogout ? "block" : "none"}`,
        zIndex: "50",
      }}
    >
      <section
        className="flex justify-content-center"
        style={{
          minHeight: "100vh",
          paddingTop: "15rem",
        }}
      >
        <div
          className="d-flex flex-column align-items-center gap-4"
          style={{
            padding: "2rem",
            background: "#21232F",
            borderRadius: "8.43px",
            maxWidth: "457px",
            margin: "auto",
          }}
        >
          <div>
            <LogOutCaution />
          </div>
          <h5
            style={{
              color: "#ffffff",
              weigh: "900",
            }}
          >
            Are you sure you want to Log out
          </h5>
          <div>
            <div
              className=""
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
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
