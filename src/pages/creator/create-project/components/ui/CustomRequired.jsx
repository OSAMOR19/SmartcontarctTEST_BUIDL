import React from "react";

const CustomRequired = ({ text }) => {
  return (
    <div className="normalPTag fw-medium position-relative">
      {text}
      <span
        className="position-absolute fs-3 fw-semibold"
        style={{
          color: "#EEA20E",
          bottom: 0,
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
