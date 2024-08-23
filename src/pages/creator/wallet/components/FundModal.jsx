import { Modal } from "react-bootstrap";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import copyToClipboard from "../../../../lib/copy";
import toastService from "../../../../lib/taostService";

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
      {/* Pls complete the design fron figma,  */}
      <Modal.Body>
        <div className="py-2 h-[600px] d-flex flex-column gap-4">
          <div className="flex w-full ">
            <h5 className="useAppWhite fw-bold">Fund wallet</h5>
          </div>
          <h5 className="useAppWhite fw-bold">
            Note: BUILDS token is the only required token to fund this wallet
          </h5>
          <div>
            <p className="useAppWhite">{address}</p>
            <div className="d-flex gap-3">
              <MediumSolidButton
                type="button"
                text="Copy address"
                style={btnStyles}
                onClick={handleCopy}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FundModal;
