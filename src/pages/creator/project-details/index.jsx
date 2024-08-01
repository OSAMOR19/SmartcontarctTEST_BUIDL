import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatorLayout from "../components/layouts";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
import Applicants from "./components/Applicants";
import NoApplicants from "./components/NoApplicants";
import ProjectInfo from "./components/ProjectInfo";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, getProjectById } from "../../../store/projects/reducer";
import CreatorSpinner from "../components/atoms/CreatorSpinner";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { project, requestStatus } = useSelector(selectProject);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProjectById(id));
  }, [dispatch, id]);

  if (requestStatus === "loading") {
    return <CreatorSpinner />;
  }

  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb previousValue={project?.title} />
      <Container
        style={{
          paddingBottom: "2rem",
        }}
      >
        <Row className="g-4 ">
          {project && <ProjectInfo project={project} />}
          {/* <NoApplicants /> */}
          <Applicants />
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
