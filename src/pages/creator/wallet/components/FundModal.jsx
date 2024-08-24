import { Modal } from "react-bootstrap";
import copyToClipboard from "../../../../lib/copy";
import toastService from "../../../../lib/taostService";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import BuidlIcon from "../../../../assets/icons/buidl-icon.svg";

// eslint-disable-next-line react/prop-types
const FundModal = ({ showFundModal, handleShowFundModal, address }) => {
  const handleCopy = async () => {
    try {
      await copyToClipboard(address);
      toastService.showSuccessMessage("Address copied successfully");
      handleShowFundModal();
    } catch (error) {
      toastService.showErrorMessage("Failed to copy address");
    }
  };

  const divStyles = {
    padding: "2rem 1rem",
    background: "#222532",
    border: "1.2px solid #3F4561",
    borderRadius: "14px",
  };

  const btnStyles = {
    marginTop: "0rem",
    width: "100%",
  };

  return (
    <Modal
      show={showFundModal}
      onHide={handleShowFundModal}
      centered
      className="modalBgColor"
    >
      <Modal.Header closeButton>
        <Modal.Title>Fund wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h5 className="useAppWhite fs-5 fw-medium">
          Note: BUILDS token is the only required token to fund this wallet
        </h5> */}
        <div style={divStyles} className="d-flex align-items-center gap-3">
          <div>
            <BuidlIcon />
          </div>
          <span className="useAppYellow mt-0 fs-4 fw-bold">BUILDS Token</span>
        </div>
        <h5 className="useAppWhite fs-5 fw-medium">
          Note: BUILDS token is the only required token to fund this wallet
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <p className="useAppWhite fw-medium">{address}</p>
        <MediumSolidButton
          type="button"
          text="Copy address"
          style={btnStyles}
          onClick={handleCopy}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default FundModal;
