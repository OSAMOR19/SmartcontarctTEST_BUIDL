import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const InputLabel = ({
  id,
  name,
  required,
  type,
  placeholder,
  value,
  label,
  onChange,
  ...props
}) => {
  const formDiv = {
    marginTop: "1.2rem",
  };

  const styles = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    borderColor: "#404354",
    outline: "none",
  };

  return (
    <Form.Group style={formDiv}>
      <Form.Label htmlFor={id} className="normalPTag fw-medium">
        {label}
      </Form.Label>
      <Form.Control
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles}
        {...props}
        className="fw-medium shadow-none"
      />
    </Form.Group>
  );
};

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputLabel;
