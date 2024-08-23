import { useLayoutEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import CreatorLayout from "../components/layouts";
import Hello from "../components/Hello";
import CreateProject from "../components/CreateProject";
import AllProjects from "./components/AllProjects";
import { selectProject } from "../../../store/projects/reducer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../store/projects/reducer";
import CreatorSpinner from "../components/atoms/CreatorSpinner";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";

const Projects = () => {
  const { allProjects, requestStatus } = useSelector(selectProject);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  if (requestStatus === "loading") {
    return <CreatorSpinner />;
  }

  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb currentValue={"Projects"} />
      {allProjects && allProjects.length > 0 ? (
        <>
          {/* <Tabs defaultActiveKey="projectDetails" className="p-4 px-md-5">
            <Tab eventKey="projectDetails" title="Project Details">
              <ProjectDetails project={project} />
            </Tab>
            <Tab eventKey="resourceStack" title="Resource Stack">
              <ResourceStack />
            </Tab>
            <Tab eventKey="manageTalents" title="Manage Talents">
              <ManageTalent />
            </Tab>
          </Tabs> */}
          <AllProjects projects={allProjects} />
        </>
      ) : (
        <>
          <Hello />
          <CreateProject />
        </>
      )}
    </div>
  );
};

export default Projects;

// const projects = [
//   {
//     id: "1",
//     title: "Shopify e-commerce System",
//     description: "",
//     duration: "",
//     progress: 0,
//     team: 0,
//     status: "draft",
//   },
//   {
//     id: "2",
//     title: "Shopify e-commerce System and YourmixJnr",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     cost: 8700.0,
//     buildToken: 93.0025,
//     progress: 0,
//     team: 0,
//     status: "completed",
//   },
//   {
//     id: "3",
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     cost: 8700.0,
//     buildToken: 93.0025,
//     progress: 1,
//     team: 1,
//     status: "completed",
//   },
//   {
//     id: "4",
//     title: "Shopify e-commerce System",
//     description:
//       "The first decentralized marketplace of MVPs with AI-powered collaborative tools for builders. Users need Buidl AI tokens to conduct transactions and pay for services within the platform,",
//     duration: "6 months",
//     cost: 8700.0,
//     buildToken: 93.0025,
//     progress: 2,
//     team: 10,
//     status: "completed",
//   },
// ];
