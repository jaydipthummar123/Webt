import React from "react";
import divim from "../../images/Right.png"
const Calendercom = () => {
  return (
    <div className=" bg-white border border-[#B9B9B9] rounded-[14px] w-[834px] ">
      {/* <div className="flex items-center justify-between px-6 pt-[33px] mb-12 flex-wrap">
        <h1 className="text-sm text-black text-opacity-60">Today</h1>
        <div className="flex gap-[14px]">
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
          <p className="text-2xl font-Nunito font-bold">October 2019</p>
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
       
        </div>
        {/* <div className="flex border border-[#979797] bg-[#FAFBFD] divide-x divide-[#979797] rounded-xl">
            <div className="py-3 px-4 flex items-center">
              <span className="text-sm">Day</span>
            </div>
            <div className="py-3 px-4  flex items-center">
              <span className="text-sm">Week</span>
            </div>
            <div className="py-3 px-4  flex items-center bg-[#5A8DFF] rounded-r-xl">
              <span className="text-sm text-white ">Month</span>
            </div>
          </div> */}
      {/* </div> */} 
      <div className="max-w-4xl px-4 mx-auto">
      {/* <div className="flex py-4 rounded-t-xl bg-[#F1F4F9] text-sm">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <div key={index} className="flex-1 text-center font-semibold">{day}</div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {[...Array(42)].map((_, i) => (
          <div
            key={i}
            className="w-[14.28%] sm:w-[14.28%] xs:w-full h-24 border flex items-start justify-start p-1 relative"
          >
            <span className="text-xs text-gray-500">{i + 1}</span>
            {i > 24 && i < 28 && (
              <div className="absolute top-6 left-1 w-full bg-blue-200 text-xs text-blue-900 px-1 rounded">
                Glastonbury Festival
              </div>
            )}
            {i === 9 && (
              <div className="absolute top-6 left-1 w-full bg-purple-300 text-xs text-purple-900 px-1 rounded">
                Design Conference
              </div>
            )}
            {i === 15 && (
              <div className="absolute top-6 left-1 w-full bg-pink-300 text-xs text-pink-900 px-1 rounded">
                Weekend Festival
              </div>
            )}
          </div>
        ))}
      </div> */}
      <img src={divim} alt="" />
    </div>
    
    </div>
  );
};

export default Calendercom;
