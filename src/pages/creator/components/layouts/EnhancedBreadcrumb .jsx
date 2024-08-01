import { Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../../../assets/icons/back-btn.svg";
import PropTypes from "prop-types";

const EnhancedBreadcrumb = ({ currentValue, previousValue }) => {
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };
  return (
    <>
      {currentValue && (
        <Container
          style={{
            paddingTop: "6rem",
            paddingBottom: "1rem",
          }}
        >
          <div className="normalPTag fs-4 fw-fw-fw-medium">{currentValue}</div>
        </Container>
      )}
      {previousValue && (
        <Container
          style={{
            paddingTop: "6rem",
            paddingBottom: "1rem",
          }}
        >
          <Col className="d-flex align-items-center gap-2">
            <div
              className=""
              style={{
                cursor: "pointer",
                marginLeft: "-5px",
              }}
              onClick={previousPage}
            >
              <BackBtn />
            </div>
            <div className="normalPTag fs-4 fw-medium mb-1">
              {previousValue}
            </div>
          </Col>
        </Container>
      )}
    </>
  );
};

EnhancedBreadcrumb.propTypes = {
  currentValue: PropTypes.string,
  previousValue: PropTypes.string,
};

export default EnhancedBreadcrumb;
