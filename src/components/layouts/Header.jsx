import React, { useState } from "react";
import { Image, Navbar, Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import LogoText from "../buidl-logos/LogoText";
import images from "../../constants/images";
import Hamburger from "../svg-components/Hamburger";
import Search from "../svg-components/Search";
import Notification from "../svg-components/Notification";
import SearchModal from "../modals/SearchModal";
import LogOutModal from "./LogOutModal";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/reducer";

const Header = ({ to, toggled, setToggled }) => {
  const { user } = useSelector(selectAuth);

  const username = user?.username;

  const [showLogout, setShowLogout] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <LogOutModal showLogout={showLogout} setShowLogout={setShowLogout} />
      <Navbar
        fixed="top"
        className="Header w-100"
        style={{ backgroundColor: "#272A38" }}
      >
        <Container>
          <Navbar.Brand>
            <div style={{ gap: 10 }} className="d-flex">
              <Hamburger
                style={{ width: "2rem", cursor: "pointer" }}
                onClick={() => setToggled(!toggled)}
              />
              <LogoText to={to} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div style={{ gap: 10 }} className="d-flex align-items-center">
              <Search onClick={handleShowModal} style={{ cursor: "pointer" }} />
              <SearchModal show={showModal} handleClose={handleCloseModal} />

              <Notification />

              <div style={{ gap: 7 }} className="d-flex align-items-center">
                <Nav>
                  <NavDropdown
                    title={
                      <div className="d-flex align-align-items-center">
                        <Image
                          src={images.profileAvatar.src}
                          alt={images.profileAvatar.alt}
                          width={38}
                          height={38}
                        />
                        <div className="userProfile" style={{ marginLeft: 7 }}>
                          <span style={{ fontSize: "1rem", color: "#A0A0A0" }}>
                            Username
                          </span>
                          <span
                            style={{
                              color: "#FFFFFF",
                              marginTop: "-5px",
                            }}
                            className="fs-5 fw-medium"
                          >
                            {username || " CharlesDesign"}
                          </span>
                        </div>
                      </div>
                    }
                    as="span"
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item
                      as="span"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as="span"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => setShowLogout(!showLogout)}
                    >
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
