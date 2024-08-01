import { useEffect } from "react";
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

  useEffect(() => {
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
