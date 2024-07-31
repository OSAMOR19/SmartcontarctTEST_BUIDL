import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const FullSolidButton = ({ type, disabled, text, ...props }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className="fullSolidButton"
      {...props}
    >
      {text}
    </Button>
  );
};

FullSolidButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default FullSolidButton;
