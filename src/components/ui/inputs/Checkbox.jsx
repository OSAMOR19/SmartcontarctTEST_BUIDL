import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const Checkbox = ({ type, name, label, checked, onChange, ...props }) => {
  return (
    <Form.Check
      id={name}
      type="checkbox"
      name={name}
      label={label}
      checked={checked}
      onChange={onChange}
      className="d-flex gap-3 align-items-center ms-3"
      {...props}
    />
  );
};

Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.element.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
