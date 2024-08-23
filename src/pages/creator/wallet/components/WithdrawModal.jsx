import { Modal, Row, Spinner } from "react-bootstrap";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import InputLabel from "../../../../components/ui/inputs/LabelInput";
import { useState } from "react";
import useWallet from "../../../../hooks/useWallet";

// eslint-disable-next-line react/prop-types
const WithdrawModal = ({ showWithdrawModal, handleShowWithdrawModal }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const { withdrawToken } = useWallet();

  const [isLoading, setIsLoading] = useState(false);

  const handleWithdraw = async () => {
    setIsLoading(true);
    const isSuccess = await withdrawToken(walletAddress, amount);
    if (isSuccess) {
      handleShowWithdrawModal();
    }
    setIsLoading(false);
  };

  const btnStyles = {
    marginTop: "0rem",
    width: "100%",
  };

  return (
    <Modal
      show={showWithdrawModal}
      onHide={handleShowWithdrawModal}
      centered
      className="modalBgColor"
    >
      {/* Pls complete the design fron figma,  */}
      <Modal.Body>
        <div className="py-2 h-[600px] d-flex flex-column gap-4">
          <div className="flex w-full ">
            <h5 className="useAppWhite fw-bold">Withdraw Funds</h5>
          </div>
          <h5 className="useAppWhite fw-bold">
            Note: Withdrawal can be made to a third party wallet that accepts
            BUILDS token.
          </h5>
          <div className="d-flex flex-column gap-3">
            <Row>
              <InputLabel
                label="Wallet Address"
                id="walletAddress"
                name="walletAddress"
                type="text"
                required={true}
                placeholder="Enter withdrawal address"
                value={walletAddress}
                onChange={handleWalletAddressChange}
              />
              <InputLabel
                label="Amount"
                id="amount"
                name="amount"
                type="text"
                required={true}
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </Row>
            <div className="d-flex gap-3">
              <MediumSolidButton
                type="button"
                text={
                  isLoading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    "Withdraw"
                  )
                }
                style={btnStyles}
                disabled={!walletAddress || !amount}
                onClick={handleWithdraw}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WithdrawModal;
