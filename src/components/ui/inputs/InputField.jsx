import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const InputField = ({
  id,
  name,
  required,
  type,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const styles = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    borderColor: "#404354",
    outline: "none",
  };

  return (
    <div className="w-100">
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
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
