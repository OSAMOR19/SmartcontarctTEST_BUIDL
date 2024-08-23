import { useState } from "react";
import { Container, Col } from "react-bootstrap";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";
import Caution from "../../../../assets/icons/caution.svg";
import FundWalletModal from "./modals/FundWalletModal";
import TransactionPin from "../../components/fund-wallet/TransactionPin";

const ProjectPayment = ({
  talentBudgets,
  onNext,
  onPrev,
  totalBudget,
  projectTitle,
}) => {
  const [toggled, setToggled] = useState(false);
  const handleToggled = () => {
    setToggled(!toggled);
  };
  const bodyStyles = {
    paddingBottom: "5rem",
  };
  const colStyles = {
    background: "#272A38",
    padding: "1rem",
    paddingBottom: "10rem",
    borderRadius: "14px",
  };
  const divStyles = {
    padding: "2rem",
    background: "#222532",
    border: "1.2px solid #3F4561",
    borderRadius: "14px",
  };
  const talentBudgetsStyles = {
    borderBottom: "2px dashed #636363",
  };
  return (
    <Container style={bodyStyles}>
      <Col style={colStyles}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div style={{ width: "100%" }} className="centerForm">
            <h2 className="strongH2Tag">Project Payment</h2>
            <p className="normalPTag">
              Your order summary. Proceed to payment.
            </p>
            <div className="pt-4">
              <div
                style={divStyles}
                className="d-flex flex-column gap-4 p-3 p-md-4"
              >
                {talentBudgets.map(({ talent, budget }, index) => {
                  return (
                    <div
                      key={index}
                      style={talentBudgetsStyles}
                      className="d-flex align-items-center justify-content-between pb-3"
                    >
                      <span className="normalPTag fw-semibold">{talent}</span>
                      <span className="normalPTag fw-bold">{budget}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between p-3">
              <span className="normalPTag fw-semibold">Total Costing</span>
              <span className="normalPTag fs-4 fw-bold">{`$${totalBudget}`}</span>
            </div>
            <div className="pt-4 pb-4">
              <div style={divStyles} className="d-flex flex-column gap-2 p-3">
                <div className="d-flex gap-2 align-items-start">
                  <div>
                    <Caution />
                  </div>
                  <span className="normalPTag fw-medium">
                    The total costing of your project{" "}
                    <span className="fw-bold">{projectTitle}</span> which is{" "}
                    <span className="fw-bold">{`$${totalBudget}.00`}</span> will
                    be deducted from your wallet
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <div style={divStyles} className="d-flex flex-column gap-2 p-3">
                <div className="d-flex gap-2 align-items-center">
                  <div>
                    <Caution />
                  </div>
                  <span className="useAppYellow fw-semibold fs-5">
                    Fund Wallet
                  </span>
                </div>
                <div className="d-flex flex-column gap-4 align-items-left flex-xl-row align-align-items-xl-center">
                  <p className="normalPTag mb-0">
                    Lorem ipsum dolor sit amet consectetur. Eget euismod enim
                    urna in eget tincidunt. Aliquet vel tincidunt.
                  </p>
                  <div>
                    <MediumOutlineButton
                      type="button"
                      text="Fund Wallet"
                      style={{
                        marginTop: "0rem",
                        width: "9rem",
                      }}
                      onClick={handleToggled}
                    />
                  </div>
                </div>
              </div>
            </div>
            <FundWalletModal toggled={toggled} setToggled={setToggled} />
            <div className="pt-4 d-flex gap-2">
              <MediumOutlineButton
                type="button"
                text="Previous"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={onPrev}
              />
              <MediumSolidButton
                type="button"
                text="Proceed"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={handleToggled}
              />
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default ProjectPayment;
