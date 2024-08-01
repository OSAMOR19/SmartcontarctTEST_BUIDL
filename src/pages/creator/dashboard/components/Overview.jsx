import { Container, Col, Row, Image } from "react-bootstrap";
import images from "../../../../constants/images";
import WalletIcon from "../../../../assets/icons/wallet-icon.svg";
import BuidlCoin from "../../../../assets/icons/buidl-coin.svg";
import { useNavigate } from "react-router-dom";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";

const Overview = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/creator/create-project");
  };
  const cardBody = {
    backgroundColor: "#272A38",
    padding: "1rem 1.5rem",
    borderRadius: 14 + "px",
  };

  return (
    <Container
      style={{
        paddingTop: "2rem",
      }}
    >
      <Row>
        <Col sm={12} lg={4}>
          <div
            className="d-flex gap-3 align-items-center h-100"
            style={cardBody}
          >
            <WalletIcon />
            <div className="d-flex flex-column align-items-start gap-1">
              <span style={{ color: "#999999", fontSize: "1rem" }}>
                Total Balance
              </span>
              <div
                className="d-flex gap-2 align-items-center"
                style={{
                  color: "#ffffff",
                  fontSize: "2rem",
                  margin: "-10px 0",
                }}
              >
                <BuidlCoin />
                <span className="fw-bold">0.00</span>
              </div>
              <span style={{ color: "#999999", fontSize: "1rem" }}>
                ~ $ 0.00
              </span>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={8} className="mt-3 mt-lg-0">
          <div style={cardBody}>
            <div className="d-flex flex-column align-items-md-center justify-content-between flex-md-row">
              <div>
                <Image
                  src={images.createImage.src}
                  alt={images.createImage.alt}
                  style={{
                    width: 80 + "px",
                  }}
                />
              </div>
              <Col md={6} lg={7}>
                <div
                  className="d-flex flex-column"
                  style={{
                    marginBottom: "-1rem",
                  }}
                >
                  <h4
                    className="fw-bold"
                    style={{
                      color: "#EEA20E",
                      fontSize: "clamp(0.8rem, 1.8rem + 1.5vw, 2rem)",
                    }}
                  >
                    Create Project
                  </h4>

                  <p className="normalPTag fw-medium">
                    The world needs builders like you to bring the future a
                    thousand miles closer.
                  </p>
                </div>
              </Col>
              <div>
                <MediumSolidButton
                  type="button"
                  text="Create Project"
                  style={{
                    width: "9rem",
                  }}
                  onClick={handleCreateProject}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
