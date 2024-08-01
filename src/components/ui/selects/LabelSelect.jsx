import Form from "react-bootstrap/Form";
import PropTypes, { object } from "prop-types";

const LabelSelect = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  ...props
}) => {
  const styles = {
    padding: 0.75 + "rem",
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    borderColor: "#404354",
    outline: "none",
  };
  return (
    <div>
      <Form.Label htmlFor={id} className="normalPTag fw-medium" {...props}>
        {label}
      </Form.Label>
      <Form.Select
        name={name}
        aria-label="Select with label"
        style={styles}
        value={value}
        onChange={onChange}
        className="fw-medium shadow-none"
        {...props}
      >
        {options.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

LabelSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(object).isRequired,
};

export default LabelSelect;
