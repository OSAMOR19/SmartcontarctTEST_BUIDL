import { Navbar } from "react-bootstrap";
import LogoText from "../buidl-logos/LogoText";

function StickyNavbar() {
  return (
    <Navbar
      fixed
      className="stickyNavPadding"
      style={{ width: 100 + "%" }}
      expand="lg"
    >
      <Navbar.Brand>
        <LogoText to={"/"} />
      </Navbar.Brand>
    </Navbar>
  );
}

export default StickyNavbar;
