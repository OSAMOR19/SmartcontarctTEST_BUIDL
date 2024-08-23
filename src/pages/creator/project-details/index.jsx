import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatorLayout from "../components/layouts";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
// import Applicants from "./components/Applicants";
import NoApplicants from "./components/NoApplicants";
import ProjectBasicDetails from "./components/ProjectBasicDetails";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, getProjectById } from "../../../store/projects/reducer";
import CreatorSpinner from "../components/atoms/CreatorSpinner";
import ProjectSidebar from "./components/ProjectSidebar";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { project, requestStatus } = useSelector(selectProject);

  const { id } = useParams();

  // console.log(project);

  useEffect(() => {
    dispatch(getProjectById(id));
  }, [dispatch, id]);
  // console.log(project);

  const containerStyles = {
    paddingBottom: "2rem",
  };

  if (requestStatus === "loading") {
    <CreatorSpinner />;
  }

  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb previousValue={project?.title} />
      <Container style={containerStyles}>
        <Row className="g-4">
          {project && <ProjectBasicDetails project={project} />}
          {/* <NoApplicants /> */}
          {/* <Applicants /> */}
          <ProjectSidebar project={project} />
        </Row>
      </Container>
    </div>
  );
};

// const project = {
//   id: 1,
//   title: "Shopify e-commerce System",
//   description: "",
//   duration: "",
//   progress: 0,
//   team: 0,
//   talentBudgets: [
//     {
//       id: 1,
//       role: "Frontend Developer",
//       budget: 1000,
//       applicant: 12,
//       status: "hired",
//     },
//     {
//       id: 2,
//       role: "Backend Developer",
//       budget: 500,
//       applicant: 9,
//       status: "notHired",
//     },
//   ],
//   status: "draft",
// };

export default ProjectDetails;
