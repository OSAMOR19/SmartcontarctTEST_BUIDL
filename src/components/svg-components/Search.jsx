import React from "react";

const Search = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="38"
      height="38"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#363A4D" />
      <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#6A7294" />
      <path
        d="M38 37L32.4507 31.4507M32.4507 31.4507C33.3999 30.5014 34.1529 29.3745 34.6666 28.1343C35.1803 26.8941 35.4447 25.5648 35.4447 24.2224C35.4447 22.8799 35.1803 21.5507 34.6666 20.3104C34.1529 19.0702 33.3999 17.9433 32.4507 16.9941C31.5014 16.0448 30.3745 15.2919 29.1343 14.7781C27.8941 14.2644 26.5648 14 25.2224 14C23.8799 14 22.5507 14.2644 21.3104 14.7781C20.0702 15.2919 18.9433 16.0448 17.9941 16.9941C16.077 18.9111 15 21.5112 15 24.2224C15 26.9335 16.077 29.5336 17.9941 31.4507C19.9111 33.3677 22.5112 34.4447 25.2224 34.4447C27.9335 34.4447 30.5336 33.3677 32.4507 31.4507Z"
        stroke="white"
        strokeWidth="1.46364"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
