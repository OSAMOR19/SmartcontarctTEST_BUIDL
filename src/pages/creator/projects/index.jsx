import { useEffect } from "react";
import CreatorLayout from "../components/layouts";
import Hello from "./components/Hello";
import CreateProject from "./components/CreateProject";
// import CreateProject from "./create-project";
import AllProjects from "./components/AllProjects";
import { selectProject } from "../../../store/projects/reducer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../store/projects/reducer";
import CreatorSpinner from "../components/atoms/CreatorSpinner";

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
