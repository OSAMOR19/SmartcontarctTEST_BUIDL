import { useSelector } from "react-redux";
import { selectProject } from "../../../store/projects/reducer";

export const useProjectsRequestStatus = (statusToCheck) => {
  const { requestStatus } = useSelector(selectProject);

  const isMatchingStatus = requestStatus === statusToCheck;

  return {
    requestStatus,
    isMatchingStatus,
  };
};
