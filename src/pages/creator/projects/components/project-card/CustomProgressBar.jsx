import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CustomProgressBar = ({ progress }) => {
  return (
    <div style={{ width: 45, height: 45 }}>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        strokeWidth={13}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `#0EEE68`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "#363C53",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
          },
          // Customize the text
          text: {
            // Text color
            fill: "#fff",
            // Text size
            fontSize: "30px",
            fontWeight: 600,
          },
        }}
      />
    </div>
  );
};

export default CustomProgressBar;
