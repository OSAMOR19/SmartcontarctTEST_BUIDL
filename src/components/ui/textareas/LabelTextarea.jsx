import PropTypes from "prop-types";

const LabelTextarea = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  rows,
  cols,
  ...props
}) => {
  const styles = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    padding: 0.75 + "rem",
    borderRadius: 8 + "px",
    outline: "none",
  };

  return (
    <div>
      <label htmlFor={id} className="normalPTag fw-medium pb-2" {...props}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        style={styles}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="w-100 fw-medium border-0 shadow-none"
        {...props}
      />
    </div>
  );
};

LabelTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default LabelTextarea;
