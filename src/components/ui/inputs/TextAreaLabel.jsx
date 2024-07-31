import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const TextAreaLabel = ({
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
  
    const inputBody = {
      fontSize: "19px",
      color: "#C8C8C8",
      backgroundColor: "#404354",
      fontWeight: "500",
      borderColor: "#404354",
      outline: "none",
      boxShadow: "none",
    };
  return (
    <textarea>
      
    </textarea>
  )
}

export default TextAreaLabel
