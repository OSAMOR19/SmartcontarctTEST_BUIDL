import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const goToRoute = (route) => {
    navigate(route);
  };

  return goToRoute;
};

export default useCustomNavigate;
