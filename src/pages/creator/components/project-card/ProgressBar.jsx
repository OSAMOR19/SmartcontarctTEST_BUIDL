import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const percentage = 66;

  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  );
};

export default ProgressBar;
