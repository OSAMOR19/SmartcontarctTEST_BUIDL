import { Container, Col } from "react-bootstrap";
import Empty from "../../../../assets/icons/empty.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";

const Transactions = () => {
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };
  return (
    <Container
      style={{
        paddingTop: "2rem",
        paddingBottom: "5rem",
      }}
    >
      <Col style={cardBody}>
        <div
          style={{
            padding: "1rem 1rem",
            borderBottom: "2px solid #565F87",
            color: "#FFFFFF",
          }}
          className="d-flex justify-content-between align-content-center"
        >
          <h4
            style={{
              fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.56rem)",
            }}
          >
            Recent Transaction
          </h4>
          <span className="normalPTag">See All</span>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            padding: "4rem 1rem",
          }}
        >
          <Empty />
          <h2
            style={{
              fontSize: "clamp(0.8rem, 1.8rem + 1.5vw, 1.8rem)",
              color: "#EEA20E",
              fontWeight: "600",
            }}
          >
            No Transaction
          </h2>
          <Col lg={6} className="text-center">
            <p
              className="normalPTag"
              style={{
                fontWeight: "600",
              }}
            >
              No transaction has been made at the moment, click on the button
              below to fund wallet
            </p>
          </Col>
          <div
            style={{
              width: 50 + "%",
              textAlign: "center",
            }}
          >
            <MediumSolidButton type="button" text="Fund Wallet" />
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Transactions;
