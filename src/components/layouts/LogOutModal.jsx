import { Container, Modal } from "react-bootstrap";
import LogOutCaution from "../../assets/icons/logout-caution.svg";
import MediumSolidButton from "../ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../ui/buttons/MediumOutlineButton";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth/reducer";
import { useNavigate } from "react-router-dom";

const LogOutModal = ({ showLogoutModal, handleShowLogoutModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowLogout(false);
    navigate("/auth/login");
  };

  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };

  return (
    <Modal
      show={showLogoutModal}
      onHide={handleShowLogoutModal}
      centered
      className="modalBgColor"
    >
      <Modal.Body>
        <div className="py-5 d-flex flex-column align-items-center gap-4">
          <div>
            <LogOutCaution />
          </div>
          <h5 className="useAppWhite fw-bold">
            Are you sure you want to Log out
          </h5>
          <div>
            <div className="d-flex gap-3">
              <MediumOutlineButton
                type="button"
                text="No"
                style={btnStyles}
                onClick={handleShowLogoutModal}
              />
              <MediumSolidButton
                type="button"
                text="Yes"
                style={btnStyles}
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LogOutModal;
