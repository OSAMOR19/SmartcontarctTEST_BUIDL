import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import WalletIcon from "../../../../assets/icons/wallet-icon.svg";
import BuidlIcon from "../../../../assets/icons/buidl-icon.svg";
import FiatIcon from "../../../../assets/icons/fiat-icon.svg";
import BuidlCoin from "../../../../assets/icons/buidl-coin.svg";

function Overview() {
  const cardBody = {
    backgroundColor: "#222532",
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

  return (
    <Container
      style={{
        paddingTop: "6rem",
      }}
    >
      <div style={cardBody}>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <Row className="align-items-center g-4">
              <Col lg={6}>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <WalletIcon />
                  </div>
                  <div className="d-flex flex-column g-2 align-items-start">
                    <span style={{ color: "#999999", fontSize: "1rem" }}>
                      Total Balance
                    </span>
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{
                        color: "#ffffff",
                        fontSize: "1.5rem",
                      }}
                    >
                      <BuidlCoin />
                      <span
                        style={{
                          fontWeight: "700",
                        }}
                      >
                        8.700
                      </span>
                    </div>
                    <span style={{ color: "#999999", fontSize: "1rem" }}>
                      ~ $ 93.00
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col>
                    <Button type="outline" style={fundBtn} size="sm">
                      Fund Wallet
                    </Button>{" "}
                  </Col>
                  <Col>
                    <Button type="outline" style={withdrawBtn} size="sm">
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
                  <div className="d-flex flex-column gap-3">
                    <span style={{ color: "#999999" }}>Total Balance</span>
                    <h6
                      style={{
                        color: "#ffffff",
                        fontSize: "1.5rem",
                        margin: "0px",
                        marginTop: "-20px",
                        fontWeight: "700",
                      }}
                    >
                      $ 8700.00
                    </h6>
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
                  <div className="d-flex flex-column gap-3">
                    <span style={{ color: "#999999", fontSize: 0.8 + "rem" }}>
                      Total Balance
                    </span>
                    <h6
                      style={{
                        color: "#ffffff",
                        fontSize: "1.5rem",
                        margin: "0px",
                        marginTop: "-20px",
                        fontWeight: "700",
                      }}
                    >
                      0.0920
                    </h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Overview;
