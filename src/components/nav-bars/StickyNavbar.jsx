import { Navbar } from "react-bootstrap";
import LogoText from "../buidl-logos/LogoText";

function StickyNavbar() {
  return (
    <Navbar fixed className="stickyNavPadding w-100" expand="lg">
      <Navbar.Brand>
        <LogoText to={"/"} />
      </Navbar.Brand>
    </Navbar>
  );
}

export default StickyNavbar;
