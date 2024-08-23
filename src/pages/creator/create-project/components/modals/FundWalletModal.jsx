import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import BuidlIcon from "../../../../../assets/icons/buidl-icon.svg";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import AwesomeTick from "../../../../../components/svg-components/AwesomeTick";

const FundWalletModal = ({ toggled, setToggled }) => {
  const [checked, setChecked] = useState(false);
  const handleCloseModal = () => {
    setToggled(false);
    setChecked(false);
  };

  const handleCheckedClick = () => {
    setChecked(!checked);
  };

  const divStyles = {
    padding: "2rem 1rem",
    cursor: "pointer",
    background: "#222532",
    border: "1.2px solid #3F4561",
    borderRadius: "14px",
  };
  return (
    <Modal
      show={toggled}
      onHide={handleCloseModal}
      centered
      className="modalBgColor"
    >
      <Modal.Header closeButton>
        <Modal.Title>Fund Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pb-3 ">
          <p className="normalPTag fw-medium">
            Choose your preferred funding method
          </p>
          <div
            style={divStyles}
            className="position-relative"
            onClick={handleCheckedClick}
          >
            <div className="d-flex align-items-center gap-3">
              <div>
                <BuidlIcon />
              </div>
              <span className="useAppYellow mt-0 fs-4 fw-bold">
                Buidl Token
              </span>
            </div>
            <div className="position-absolute end-0 top-0">
              <AwesomeTick checked={checked} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <MediumSolidButton
          disabled={!checked}
          type="button"
          text="Proceed"
          style={{
            marginTop: "0rem",
            width: "100%",
          }}
          //   onClick={handleSave}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default FundWalletModal;
