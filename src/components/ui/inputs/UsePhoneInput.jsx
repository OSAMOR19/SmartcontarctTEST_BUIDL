import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

//css
import "react-phone-input-2/lib/style.css";

const UsePhoneInput = ({ label, value, onChange }) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleCountrySelect = () => {
    if (!isInputFocused) {
      setInputFocused(true);
    }
  };

  const formDiv = {
    marginTop: "1.2rem",
  };

  return (
    <Form.Group style={formDiv}>
      <Form.Label
        className="normalPTag"
        style={{
          fontWeight: "500",
        }}
      >
        {label}
      </Form.Label>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={onChange}
        onSelectCountry={handleCountrySelect}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        style={{ width: "100%" }}
      />
    </Form.Group>
  );
};

UsePhoneInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UsePhoneInput;
