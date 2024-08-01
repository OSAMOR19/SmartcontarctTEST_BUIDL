import ProgressLabel from "react-progress-label";

const CreatorProgressLabel = ({ progress }) => {
  return (
    <div>
      <ProgressLabel
        progress={progress}
        fillColor="#222532"
        trackColor="#363C53"
        progressColor="#0EEE68"
        progressWidth={8}
        trackWidth={6}
        trackBorderWidth={1}
        trackBorderColor="#363C53"
        cornersWidth={4}
        size={50}
        text={`${progress}%`}
        textProps={{
          x: "50%",
          y: "50%",
          dx: 0.5,
          dy: 5,
          textAnchor: "middle",
          style: {
            fontSize: 15,
            fontWeight: "500",
            fill: "#FFF",
          },
        }}
      />
    </div>
  );
};

export default CreatorProgressLabel;
