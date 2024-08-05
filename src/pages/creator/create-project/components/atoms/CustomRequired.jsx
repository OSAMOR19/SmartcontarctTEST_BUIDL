import React from "react";

const CustomRequired = ({ text }) => {
  return (
    <div className="position-relative">
      {text}
      <span
        className="position-absolute fs-3 fw-semibold"
        style={{
          color: "#EEA20E",
          bottom: 0,
          left: "100%",
          marginInlineStart: "10px",
          marginBottom: "-5px",
        }}
      >
        *
      </span>
    </div>
  );
};

export default CustomRequired;
