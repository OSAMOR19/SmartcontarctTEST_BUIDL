import React from "react";

const Project = ({ active }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M9.7 0.375C8.73528 0.375 7.81006 0.758236 7.1279 1.4404C6.44574 2.12256 6.0625 3.04778 6.0625 4.0125V5.225H3.6375C2.67278 5.225 1.74756 5.60824 1.0654 6.2904C0.383236 6.97256 0 7.89777 0 8.8625V11.7507L1.75449 12.6273L1.76055 12.6309L1.79329 12.6467L1.93879 12.7146C2.07055 12.7769 2.26697 12.8625 2.52806 12.9717C3.04822 13.1863 3.80846 13.4761 4.75179 13.7658C6.64571 14.3478 9.25138 14.925 12.125 14.925C15.001 14.925 17.6055 14.3491 19.497 13.7658C20.4427 13.4748 21.2018 13.1863 21.7219 12.9717C21.9694 12.8692 22.2144 12.7608 22.4567 12.6467L22.4895 12.6309L22.4955 12.6285L24.25 11.7495V8.8625C24.25 7.89777 23.8668 6.97256 23.1846 6.2904C22.5024 5.60824 21.5772 5.225 20.6125 5.225H18.1875V4.0125C18.1875 3.04778 17.8043 2.12256 17.1221 1.4404C16.4399 0.758236 15.5147 0.375 14.55 0.375H9.7ZM15.7625 5.225V4.0125C15.7625 3.69092 15.6348 3.38252 15.4074 3.15513C15.18 2.92775 14.8716 2.8 14.55 2.8H9.7C9.37842 2.8 9.07002 2.92775 8.84263 3.15513C8.61524 3.38252 8.4875 3.69092 8.4875 4.0125V5.225H15.7625ZM23.5795 14.7965L24.25 14.4618V20.9875C24.25 21.9522 23.8668 22.8774 23.1846 23.5596C22.5024 24.2418 21.5772 24.625 20.6125 24.625H3.6375C2.67278 24.625 1.74756 24.2418 1.0654 23.5596C0.383236 22.8774 0 21.9522 0 20.9875V14.4618L0.670512 14.7965L0.672938 14.7989L0.677787 14.8013L0.69355 14.8086L0.743262 14.8328L0.92635 14.9177C1.08397 14.9905 1.31193 15.0923 1.60171 15.2112C2.18129 15.4512 3.01185 15.7689 4.03884 16.0842C6.08554 16.7146 8.93612 17.35 12.125 17.35C15.3115 17.35 18.1632 16.7134 20.2124 16.0842C21.0378 15.831 21.8511 15.5397 22.6495 15.2112C22.9382 15.092 23.2241 14.9658 23.5067 14.8328L23.5564 14.8086L23.5722 14.8013L23.5771 14.7989L23.5795 14.7965ZM12.125 10.075C11.8034 10.075 11.495 10.2027 11.2676 10.4301C11.0402 10.6575 10.9125 10.9659 10.9125 11.2875C10.9125 11.6091 11.0402 11.9175 11.2676 12.1449C11.495 12.3723 11.8034 12.5 12.125 12.5H12.1371C12.4587 12.5 12.7671 12.3723 12.9945 12.1449C13.2219 11.9175 13.3496 11.6091 13.3496 11.2875C13.3496 10.9659 13.2219 10.6575 12.9945 10.4301C12.7671 10.2027 12.4587 10.075 12.1371 10.075H12.125Z"
        fill={active ? "#16192A" : "#F3F3F3"}
      />
    </svg>
  );
};

export default Project;
