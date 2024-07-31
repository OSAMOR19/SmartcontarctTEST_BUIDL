import React from "react";

const Creator = ({ active }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1985 20.6483C24.1427 21.0185 24.0018 21.3708 23.7868 21.6773C23.5729 21.9786 23.2896 22.2239 22.9609 22.3924C22.6321 22.561 22.2676 22.648 21.8982 22.6459H19.8994C19.7572 22.6453 19.6172 22.611 19.4909 22.5458C19.3646 22.4805 19.2556 22.3862 19.173 22.2706C19.0892 22.155 19.0336 22.0215 19.0105 21.8807C18.9874 21.7399 18.9974 21.5957 19.0398 21.4594C19.4877 20.0308 19.3909 18.4206 15.3339 15.8419C15.1686 15.7336 15.042 15.5755 14.9723 15.3906C14.9027 15.2056 14.8937 15.0033 14.9465 14.8128C15.0032 14.6252 15.1184 14.4606 15.2752 14.343C15.432 14.2254 15.6222 14.161 15.8182 14.1591C17.5497 14.1832 19.2393 14.6945 20.6936 15.6345C22.1479 16.5745 23.308 17.9051 24.0411 19.4739C24.19 19.8463 24.2441 20.2498 24.1985 20.6483ZM21.1706 7.29455C21.1674 8.713 20.6024 10.0724 19.5993 11.0753C18.5962 12.0782 17.2366 12.6428 15.8182 12.6457C15.6594 12.6425 15.5042 12.5983 15.3675 12.5174C15.2309 12.4365 15.1175 12.3216 15.0383 12.184C14.9591 12.0463 14.9169 11.8905 14.9156 11.7317C14.9144 11.5729 14.9542 11.4165 15.0313 11.2777C15.7724 10.0924 16.1654 8.72271 16.1654 7.32482C16.1654 5.92693 15.7724 4.55721 15.0313 3.37198C14.9363 3.23628 14.8803 3.07719 14.8692 2.91193C14.8582 2.74667 14.8925 2.58154 14.9686 2.4344C15.0446 2.28727 15.1595 2.16375 15.3007 2.0772C15.4419 1.99065 15.6041 1.94438 15.7698 1.94339C16.4787 1.94101 17.1805 2.08371 17.8322 2.36271C18.4839 2.6417 19.0716 3.05109 19.5592 3.56569C20.5551 4.57129 21.1163 5.9277 21.1221 7.34298L21.1706 7.29455Z"
        fill={active ? "#16192A" : "#F3F3F3"}
      />
      <path
        d="M17.7677 20.6116C17.8168 21.2043 17.7002 21.7989 17.4308 22.3292C17.1614 22.8594 16.7499 23.3042 16.2423 23.614C15.7362 23.9252 15.1526 24.0886 14.5594 24.0862H3.2118C2.61781 24.0888 2.03492 23.9253 1.52897 23.614C1.02026 23.306 0.608391 22.8612 0.340376 22.3303C0.0723602 21.7994 -0.0410073 21.2038 0.0132111 20.6116C0.058418 20.0209 0.268113 19.4548 0.618546 18.9772C1.58333 17.6924 2.82647 16.6426 4.25476 15.9067C5.68304 15.1707 7.25939 14.7677 8.86563 14.7277C10.4773 14.7593 12.0607 15.1572 13.4959 15.8913C14.931 16.6255 16.1803 17.6766 17.149 18.9651C17.5014 19.4472 17.7161 20.0167 17.7677 20.6116ZM14.8258 6.83415C14.8226 8.40805 14.1966 9.91671 13.0846 11.0305C11.9726 12.1444 10.4649 12.7728 8.89106 12.7785C8.01475 12.7764 7.14978 12.5802 6.35827 12.2041C5.56675 11.8281 4.86832 11.2814 4.31312 10.6034C3.75792 9.92542 3.35973 9.1329 3.14712 8.28276C2.93452 7.43263 2.91278 6.54597 3.08347 5.68644C3.25488 4.82669 3.61471 4.01563 4.13707 3.31158C4.65944 2.60754 5.33135 2.02802 6.10447 1.61471C6.87759 1.20141 7.73271 0.964593 8.60831 0.921301C9.4839 0.878009 10.3582 1.02932 11.1683 1.36434C12.2516 1.81194 13.178 2.57027 13.8309 3.5437C14.4837 4.51713 14.8337 5.66208 14.8367 6.83415H14.8258Z"
        fill={active ? "#16192A" : "#F3F3F3"}
      />
    </svg>
  );
};

export default Creator;
