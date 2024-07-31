import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const Checkbox = ({ type, name, label, checked, onChange, ...props }) => {
  return (
    <Form.Check
      id={name}
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        marginLeft: 1 + "rem",
      }}
      type="checkbox"
      name={name}
      label={label}
      checked={checked}
      onChange={onChange}
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
