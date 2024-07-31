import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const MediumSolidButton = ({ type, disabled, text, ...props }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className="smallSolidButton"
      {...props}
    >
      {text}
    </Button>
  );
};

MediumSolidButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default MediumSolidButton;
