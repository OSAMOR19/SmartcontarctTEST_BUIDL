import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

const LogoText = ({ to }) => {
  return (
    <Link to={to} className="inline-block">
      <Logo />
    </Link>
  );
};

LogoText.propTypes = {
  to: PropTypes.string.isRequired,
};

export default LogoText;
