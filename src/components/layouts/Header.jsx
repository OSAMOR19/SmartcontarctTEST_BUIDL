import React, { useState } from "react";
import { Image, Navbar, Container, Dropdown } from "react-bootstrap";
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

              <Dropdown align={"end"} className="d-flex align-items-center">
                <Dropdown.Toggle
                  as={"button"}
                  className="bg-transparent border-0"
                >
                  <div className="d-flex align-items-center">
                    <Image
                      src={images.profileAvatar.src}
                      alt={images.profileAvatar.alt}
                      width={38}
                      height={38}
                    />
                    <div className="ms-2 d-none flex-column align-items-start  d-md-flex ">
                      <span style={{ fontSize: "1rem", color: "#A0A0A0" }}>
                        Username
                      </span>
                      <span
                        style={{
                          fontSize: "1.12rem",
                          color: "#FFFFFF",
                          marginTop: "-5px",
                        }}
                        className="fw-medium"
                      >
                        {username || "CharlesDesign"}
                      </span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as="span"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    as="span"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => setShowLogout(!showLogout)}
                  >
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
