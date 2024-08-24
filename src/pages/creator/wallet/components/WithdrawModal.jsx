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
      <Modal.Header closeButton>
        <Modal.Title>Withdraw Funds</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <h5 className="useAppWhite fs-5 fw-medium mb-0">
          Note: BUILDS token is the only required token to fund this wallet
        </h5>
        <div className="mt-0">
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
        </div>
        <div className="mt-0">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
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
      </Modal.Footer>
    </Modal>
  );
};

export default WithdrawModal;
