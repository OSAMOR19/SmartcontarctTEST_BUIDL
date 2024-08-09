import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import BuidlIcon from "../../../../../assets/icons/buidl-icon.svg";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import FundWalletTick from "../../../../../components/svg-components/FundWalletTick";

const FundWalletModal = ({ toggled, setToggled }) => {
  const [checked, setChecked] = useState(false);
  const handleClose = () => {
    setToggled(false);
  };
  const divStyles = {
    padding: "2rem 1rem",
    cursor: "pointer",
    background: "#222532",
    border: "1.2px solid #3F4561",
    borderRadius: "14px",
  };
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <Modal show={toggled} onHide={handleClose} centered>
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
            onClick={handleClick}
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
              <FundWalletTick checked={checked} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <MediumSolidButton
          disabled={checked}
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
