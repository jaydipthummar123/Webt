import React from "react";
import im1 from "../../images/Image (6).png";
import im2 from "../../images/Man Image.png";
import im3 from "../../images/Man Image (1).png";
import CalendarComponent from "./Calendercom";

const Calender = () => {
  return (
    <div className="w-full bg-[#F5F6FA] min-h-screen p-[30px]">
      <h1 className="text-[32px] font-bold text-[#202224]">Calender</h1>
      <div className="mt-4 flex flex-wrap font-Nunito ">
        <div className="border border-[#B9B9B9] bg-white rounded-[14px]">
          <div className="p-6">
            <div className="bg-[#4880FF] rounded-lg">
              <h2 className="py-3 px-[62px] font-bold  text-white">
                + Add New Event
              </h2>
            </div>
            <h3 className="text-lg font-bold pt-6 ">You are going to</h3>
          </div>
          <div className="border border-[#E0E0E0] mt-4 mb-6"></div>
          <div className="w-full px-6 flex">
            <div>
              <img src={im1} alt="" />
            </div>
            <div className="flex flex-col pl-3 font-Nunito gap-1">
              <span className="text-sm font-bold">Design Conference</span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Today 07:19 AM
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                56 Davion Mission Suite 157
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Meaghanberg
              </span>
              <div className="flex gap-2  mt-1">
                <img src={im2} alt="" />
                <img src={im3} alt="" />
                <img src={im3} alt="" />
                <div className="w-6 h-6 rounded-full bg-[#DFE9FF5E] border border-[#4880FF] flex items-center">
                  <p className="text-[#4880FF] text-[10px] ">15+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#E0E0E0] mt-4  mb-6"></div>
          <div className="w-full px-6 flex">
            <div>
              <img src={im1} alt="" />
            </div>
            <div className="flex flex-col pl-3 font-Nunito gap-1">
              <span className="text-sm font-bold">Design Conference</span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Today 07:19 AM
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                56 Davion Mission Suite 157
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Meaghanberg
              </span>
              <div className="flex gap-2  mt-1">
                <img src={im2} alt="" />
                <img src={im3} alt="" />
                <img src={im3} alt="" />
                <div className="w-6 h-6 rounded-full bg-[#DFE9FF5E] border border-[#4880FF] flex items-center">
                  <p className="text-[#4880FF] text-[10px] ">15+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#E0E0E0] mt-4  mb-6"></div>
          <div className="w-full px-6 flex">
            <div>
              <img src={im1} alt="" />
            </div>
            <div className="flex flex-col pl-3 font-Nunito gap-1">
              <span className="text-sm font-bold">Design Conference</span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Today 07:19 AM
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                56 Davion Mission Suite 157
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Meaghanberg
              </span>
              <div className="flex gap-2  mt-1">
                <img src={im2} alt="" />
                <img src={im3} alt="" />
                <img src={im3} alt="" />
                <div className="w-6 h-6 rounded-full bg-[#DFE9FF5E] border border-[#4880FF] flex items-center">
                  <p className="text-[#4880FF] text-[10px] ">15+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#E0E0E0] mt-4  mb-6"></div>
          <div className="w-full px-6 flex">
            <div>
              <img src={im1} alt="" />
            </div>
            <div className="flex flex-col pl-3 font-Nunito gap-1">
              <span className="text-sm font-bold">Design Conference</span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Today 07:19 AM
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                56 Davion Mission Suite 157
              </span>
              <span className="text-xs text-[#202224] text-opacity-60">
                Meaghanberg
              </span>
              <div className="flex gap-2  mt-1">
                <img src={im2} alt="" />
                <img src={im3} alt="" />
                <img src={im3} alt="" />
                <div className="w-6 h-6 rounded-full bg-[#DFE9FF5E] border border-[#4880FF] flex items-center">
                  <p className="text-[#4880FF] text-[10px] ">15+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[39px] px-[72px] flex ">
            <div className="px-8  py-[10px] bg-[#E2EAF8] rounded-xl mb-[27px]">
              <span className="text-sm font-bold ">See More</span>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Calender;
