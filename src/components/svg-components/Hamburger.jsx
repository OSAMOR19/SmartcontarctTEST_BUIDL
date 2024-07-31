import React from "react";

const Hamburger = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="35"
      height="35"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.489362"
        y="0.489362"
        width="45.0213"
        height="45.0213"
        rx="3.42553"
        fill="#3D4361"
      />
      <rect
        x="0.489362"
        y="0.489362"
        width="45.0213"
        height="45.0213"
        rx="3.42553"
        stroke="#686A75"
        strokeWidth="0.978723"
      />
      <rect
        x="5.87109"
        y="12.7227"
        width="33.2766"
        height="2.93617"
        rx="1.46809"
        fill="#D9D9D9"
      />
      <rect
        x="5.87109"
        y="21.5312"
        width="33.2766"
        height="2.93617"
        rx="1.46809"
        fill="#D9D9D9"
      />
      <rect
        x="5.87109"
        y="30.3398"
        width="33.2766"
        height="2.93617"
        rx="1.46809"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export default Hamburger;
