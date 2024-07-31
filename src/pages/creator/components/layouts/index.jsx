import { useState } from "react";
import Header from "../../../../components/layouts/Header";
import ProSidebar from "../../../../components/layouts/ProSidebar";

// import svg icons for pro-side-bar
import DashboardSvg from "../../../../components/svg-components/DashboardSvg";
import Project from "../../../../components/svg-components/Projects";
import Wallet from "../../../../components/svg-components/Wallet";
import AiTools from "../../../../components/svg-components/AiTools";
import Settings from "../../../../components/svg-components/Settings";
import FolderSvg from "../../../../components/svg-components/FolderSvg";

const CreatorLayout = () => {
  const [toggled, setToggled] = useState(false);
  const menuItems = [
    {
      label: "Dashboard",
      icon: (
        <DashboardSvg active={location.pathname === "/creator/dashboard"} />
      ),
      path: "/creator/dashboard",
    },
    {
      label: "Wallets",
      icon: <Wallet active={location.pathname === "/wallet"} />,
      path: "#",
      className: "opacity-2",
    },

    {
      label: "Projects",
      icon: <Project active={location.pathname === "/creator-projects"} />,
      path: "#",
    },
    {
      label: "Multi-AI tool",
      icon: <AiTools active={location.pathname === "/multi-ai"} />,
      path: "#",
    },

    {
      label: "Partner Directories",
      icon: <FolderSvg active={location.pathname === "/partner-directories"} />,
      path: "#",
    },

    {
      label: "Settings",
      icon: <Settings active={location.pathname === "/settings"} />,
      path: "#",
    },
  ];

  return (
    <>
      <Header
        toggled={toggled}
        setToggled={setToggled}
        to={"/creator/dashboard"}
      />
      <ProSidebar items={menuItems} toggled={toggled} setToggled={setToggled} />
    </>
  );
};

export default CreatorLayout;
