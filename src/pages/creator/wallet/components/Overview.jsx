import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import WalletIcon from "../../../../assets/icons/wallet-icon.svg";
import BuidlIcon from "../../../../assets/icons/buidl-icon.svg";
import FiatIcon from "../../../../assets/icons/fiat-icon.svg";
import BuidlCoin from "../../../../assets/icons/buidl-coin.svg";
import useWallet from "../../../../hooks/useWallet";
import FundModal from "./FundModal";
import WithdrawModal from "./WithdrawModal";

function Overview() {
  const [showFundModal, setShowFundModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const handleShowFundModal = () => {
    setShowFundModal(!showFundModal);
  };
  const handleShowWithdrawModal = () => {
    setShowWithdrawModal(!showWithdrawModal);
  };

  const cardBody = {
    backgroundColor: "#272A38",
    padding: "1rem 1rem ",
    borderRadius: 12 + "px",
    height: "auto",
  };

  const cardInner = {
    backgroundColor: "#222532",
    border: "1px solid #3F4561",
    padding: "1.6rem 1rem ",
    borderRadius: 12 + "px",
    height: "auto",
  };

  const fundBtn = {
    borderRadius: "26.22px",
    backgroundColor: "#EEA20E",
    border: "1px solid #EEA20E",
    color: "#ffffff",
    fontSize: 1 + "rem",
    padding: 0.5 + "rem",
    fontWeight: "600",
    width: 100 + "%",
  };

  const withdrawBtn = {
    borderRadius: "26.22px",
    backgroundColor: "transparent",
    border: "1px solid #EEA20E",
    color: "#EEA20E",
    fontSize: 1 + "rem",
    fontWeight: "600",
    padding: 0.5 + "rem",
    width: 100 + "%",
  };

  const smallStyles = {
    color: "#999999",
  };

  const useMargin = {
    margin: "-5px 0px",
  };

  const useMarginTop = {
    marginTop: "-10px",
  };

  const { balance, tokenBalance, address } = useWallet();

  return (
    <>
      <Container>
        <div style={cardBody}>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <Row className="align-items-center g-4">
                <Col lg={6}>
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <WalletIcon />
                    </div>
                    <div className="d-flex flex-column align-items-start">
                      <span style={smallStyles} className="fs-6 fw-semibold">
                        Total Balance
                      </span>
                      <div className="d-flex gap-2 align-items-center">
                        <BuidlCoin />
                        <span
                          style={useMargin}
                          className="useAppWhite fs-2 fw-bold"
                        >
                          {tokenBalance}
                        </span>
                      </div>
                      <span style={smallStyles} className="fs-6 fw-semibold">
                        ~ $ 00.00
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col>
                      <Button
                        type="outline"
                        style={fundBtn}
                        size="sm"
                        onClick={handleShowFundModal}
                      >
                        Fund Wallet
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type="outline"
                        style={withdrawBtn}
                        size="sm"
                        onClick={handleShowWithdrawModal}
                      >
                        Withdraw
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <Row className="g-4">
                <Col>
                  <div
                    className="d-flex gap-3 align-items-center"
                    style={cardInner}
                  >
                    <div>
                      <FiatIcon />
                    </div>
                    <div className="d-flex flex-column">
                      <span style={smallStyles} className="fs-6 fw-semibold">
                        Fiat Balance
                      </span>
                      <span
                        style={useMarginTop}
                        className="useAppWhite fs-2 fw-bold"
                      >
                        {`$${balance}`}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    style={cardInner}
                    className="d-flex gap-3 align-items-center"
                  >
                    <div>
                      <BuidlIcon />
                    </div>
                    <div className="d-flex flex-column">
                      <span style={smallStyles} className="fs-6 fw-semibold">
                        Builds Balance
                      </span>
                      <span
                        style={useMarginTop}
                        className="useAppWhite fs-2 fw-bold"
                      >
                        {tokenBalance}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <FundModal
        showFundModal={showFundModal}
        handleShowFundModal={handleShowFundModal}
        address={address}
      />
      <WithdrawModal
        showWithdrawModal={showWithdrawModal}
        handleShowWithdrawModal={handleShowWithdrawModal}
        address={address}
      />
    </>
  );
}

export default Overview;
