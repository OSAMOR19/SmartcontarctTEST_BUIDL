import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProject } from "../../../store/projects/reducer";

const useNavigateOnSuccess = (statusToCheck, path) => {
  const navigate = useNavigate();
  const { requestStatus } = useSelector(selectProject);

  const isStatusSuccessful = requestStatus === statusToCheck;

  useEffect(() => {
    if (isStatusSuccessful) {
      navigate(path);
    }
  }, [isStatusSuccessful, navigate, path]);
};

export default useNavigateOnSuccess;
