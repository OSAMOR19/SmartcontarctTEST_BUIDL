import { useEffect } from "react";
import Hello from "./components/Hello";
import CreatorLayout from "../components/layouts";
import CreateProject from "./components/CreateProject";
import Overview from "./components/Overview";
import MyProjects from "./components/MyProjects";
import Transaction from "./components/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, getAllProjects } from "../../../store/projects/reducer";
import CreatorSpinner from "../components/atoms/CreatorSpinner";

const CreatorDashboard = () => {
  const { allProjects, requestStatus } = useSelector(selectProject);

  const firstThreeProjects = allProjects
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

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
      <Hello />
      {allProjects && allProjects.length > 0 ? (
        <>
          <Overview />
          <MyProjects projects={firstThreeProjects} />
          <Transaction />
        </>
      ) : (
        <>
          <CreateProject />
        </>
      )}
    </div>
  );
};

export default CreatorDashboard;
