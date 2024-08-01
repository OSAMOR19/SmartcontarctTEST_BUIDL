import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import LogoText from "../buidl-logos/LogoText";

const ProSidebar = ({
  items,
  activeClassName = "active",
  toggled,
  setToggled,
}) => {
  const location = useLocation();

  return (
    <Sidebar
      backgroundColor="#272A38"
      className="sidebar"
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="always"
    >
      <div className="pt-4 ps-4">
        <LogoText to={"/dashboard"} />
      </div>
      <Menu
        className="menu"
        style={{ marginBottom: "2rem", marginTop: "4rem" }}
        menuItemStyles={{
          button: ({ active }) => ({
            color: active ? "#16192A" : "#FFFFFF",
            backgroundColor: active ? "#EEA20E" : "transparent",
            "&:hover": {
              backgroundColor: active ? "#EEA20E" : "transparent",
              color: active ? "#16192A" : "#FFFFFF",
            },
            borderRadius: "21px",
            padding: "0px 2px",
            fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.1rem)",
            marginBottom: "0.9rem",
            "@media (min-width: 768px)": {
              marginBottom: "0.5rem",
            },
          }),
        }}
      >
        {items.map((item) => (
          <NavLink
            key={item.label}
            style={{ textDecoration: "none" }}
            to={item.path}
          >
            <MenuItem
              active={location.pathname === item.path}
              className={location.pathname === item.path ? activeClassName : ""}
              style={{ height: "40px" }}
              icon={item.icon}
            >
              {item.label}
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebar;
