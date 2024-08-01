import { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  id,
  name,
  required,
  placeholder,
  value,
  label,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const formDiv = {
    marginTop: "1.2rem",
  };

  const inputBody = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    borderColor: "#404354",
    outline: "none",
  };

  const spanStyle = {
    position: "absolute",
    top: "50%",
    right: "0.5rem",
    transform: "translateY(-59%)",
    cursor: "pointer",
    color: "#ffffff",
  };

  return (
    <Form.Group style={formDiv}>
      <Form.Label htmlFor={id} className="normalPTag fw-medium" {...props}>
        {label}
      </Form.Label>
      <div
        style={{
          position: "relative",
        }}
      >
        <Form.Control
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputBody}
          className="fw-medium shadow-none"
          {...props}
        />
        <span style={spanStyle} onClick={togglePassword}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
    </Form.Group>
  );
};

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;
