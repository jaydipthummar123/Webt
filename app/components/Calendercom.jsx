import React from "react";

const Calendercom = () => {
  return (
    <div className=" bg-white border border-[#B9B9B9] rounded-[14px] max-w-[834px]">
      <div className="flex items-center px-6 pt-[33px] ">
        <h1>Today</h1>
        <div className="flex ">
          <button>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.01777 7L9.63388 12.2929C10.122 12.6834 10.122 13.3166 9.63388 13.7071C9.14573 14.0976 8.35427 14.0976 7.86612 13.7071L0.366117 7.70711C-0.122039 7.31658 -0.122039 6.68342 0.366117 6.29289L7.86612 0.292893C8.35427 -0.0976305 9.14573 -0.0976305 9.63388 0.292893C10.122 0.683417 10.122 1.31658 9.63388 1.70711L3.01777 7Z"
                fill="#565656"
              />
              <mask
                id="mask0_0_6357"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="10"
                height="14"
              >
                <path
                  d="M3.01777 7L9.63388 12.2929C10.122 12.6834 10.122 13.3166 9.63388 13.7071C9.14573 14.0976 8.35427 14.0976 7.86612 13.7071L0.366117 7.70711C-0.122039 7.31658 -0.122039 6.68342 0.366117 6.29289L7.86612 0.292893C8.35427 -0.0976305 9.14573 -0.0976305 9.63388 0.292893C10.122 0.683417 10.122 1.31658 9.63388 1.70711L3.01777 7Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_6357)"></g>
            </svg>
          </button>
          <p>October 2019</p>
          <button>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.98223 7L0.366117 12.2929C-0.122039 12.6834 -0.122039 13.3166 0.366117 13.7071C0.854272 14.0976 1.64573 14.0976 2.13388 13.7071L9.63388 7.70711C10.122 7.31658 10.122 6.68342 9.63388 6.29289L2.13388 0.292893C1.64573 -0.0976305 0.854272 -0.0976305 0.366117 0.292893C-0.122039 0.683417 -0.122039 1.31658 0.366117 1.70711L6.98223 7Z"
                fill="#565656"
              />
              <mask
                id="mask0_0_6354"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="10"
                height="14"
              >
                <path
                  d="M6.98223 7L0.366117 12.2929C-0.122039 12.6834 -0.122039 13.3166 0.366117 13.7071C0.854272 14.0976 1.64573 14.0976 2.13388 13.7071L9.63388 7.70711C10.122 7.31658 10.122 6.68342 9.63388 6.29289L2.13388 0.292893C1.64573 -0.0976305 0.854272 -0.0976305 0.366117 0.292893C-0.122039 0.683417 -0.122039 1.31658 0.366117 1.70711L6.98223 7Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_6354)"></g>
            </svg>
          </button>
          <div className="flex border border-[#979797] bg-[#FAFBFD] divide-x divide-[#979797] rounded-md">
            <div className="p-3 flex items-center">
              <span>Day</span>
            </div>
            <div className="p-3 flex items-center">
              <span>Week</span>
            </div>
            <div className="p-3 flex items-center">
              <span>Month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendercom;
