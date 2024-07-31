import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const MediumOutlineButton = ({ type, disabled, text, ...props }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className="smallOutlineButton"
      {...props}
    >
      {text}
    </Button>
  );
};

MediumOutlineButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default MediumOutlineButton;
