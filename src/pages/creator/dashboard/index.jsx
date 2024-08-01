import { useEffect } from "react";
import CreatorLayout from "../components/layouts";
import Hello from "../components/Hello";
import CreateProject from "../create-project";
import Overview from "./components/Overview";
import MyProjects from "./components/MyProjects";
import Transaction from "./components/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, getAllProjects } from "../../../store/projects/reducer";
import CreatorSpinner from "../components/atoms/CreatorSpinner";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";

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
      <EnhancedBreadcrumb currentValue={"Dashboard"} />
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
