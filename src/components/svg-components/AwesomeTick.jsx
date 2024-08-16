import React from "react";

const AwesomeTick = ({ checked }) => {
  const customStyles = {
    borderRadius: "10%",
  };
  return (
    <svg
      width="98"
      height="70"
      viewBox="0 0 90 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyles}
    >
      <g opacity={checked ? "1" : "0.03"}>
        <path d="M0.0439453 0H97.1669V69.752L0.0439453 0Z" fill="#EEA20E" />
        <path
          d="M54.7861 22.511C59.0926 26.7989 63.2682 30.6592 67.2819 35.5416C71.6458 27.5543 76.1122 19.5394 83.4818 10.8595L81.4961 10.0225C75.2732 16.0956 70.4386 21.8444 66.2377 28.6763C63.3164 26.2546 58.5953 22.8276 55.7126 21.0668L54.7861 22.511Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default AwesomeTick;
