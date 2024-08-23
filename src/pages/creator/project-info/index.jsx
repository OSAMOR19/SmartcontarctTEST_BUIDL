import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Tab, Tabs } from "react-bootstrap";
import {
  selectProject,
  getProjectById,
  getProjectResources,
} from "../../../store/projects/reducer";
import CreatorLayout from "../components/layouts";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
import CreatorSpinner from "../components/atoms/CreatorSpinner";
import ProjectDetails from "./components/ProjectDetails";
import ResourceStack from "./components/ResourceStack";
import ManageTalent from "./components/ManageTalent";

const ProjectInfo = () => {
  const dispatch = useDispatch();
  const { project, requestStatus } = useSelector(selectProject);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProjectById(id));
    dispatch(getProjectResources(id));
  }, [dispatch, id]);

  const containerStyles = {
    paddingBottom: "2rem",
  };
  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };

  return (
    <>
      {requestStatus === "loading" && <CreatorSpinner />}
      <div className="fullHeightWithColorBg">
        <CreatorLayout />
        <EnhancedBreadcrumb previousValue={project?.title} />
        <Container style={containerStyles}>
          <div style={cardBody} className="project-info pb-5">
            <Tabs defaultActiveKey="projectDetails" className="p-4 px-md-5">
              <Tab eventKey="projectDetails" title="Project Details">
                <ProjectDetails project={project} />
              </Tab>
              <Tab eventKey="resourceStack" title="Resource Stack">
                <ResourceStack projectResources={project?.projectResources} />
              </Tab>
              <Tab eventKey="manageTalents" title="Manage Talents">
                <ManageTalent />
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectInfo;

// const project = {
//   id: "1",
//   title: "Shopify e-commerce System",
//   description: "",
//   duration: "",
//   progress: 0,
//   team: 0,
//   status: "draft",
// };
