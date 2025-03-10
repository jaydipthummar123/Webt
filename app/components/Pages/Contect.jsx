import React from "react";
import im1 from "../../images/Image (8).png";
import im2 from "../../images/Image (9).png";
import im3 from "../../images/Image (10).png";
import im4 from "../../images/Image (11).png";
import im5 from "../../images/Image (12).png";
import im6 from "../../images/Image (13).png";

const Contect = () => {
  return (
    <div>
      <div className="w-full bg-[#F5F6FA] min-h-screen p-[30px] font-Nunito ">
        <div className="flex justify-between items-center mb-8 font-Nunito">
          <h1 className="text-[32px] font-bold text-[#202224] ">Contact </h1>
          <div className="py-[11px] px-[27px] rounded-md bg-[#4379EE]">
            <h3 className="font-Nunito text-sm text-white">Add New Contact</h3>
          </div>
        </div>
        <div className="flex gap-[30px] flex-wrap">
        <div className="flex flex-col border border-[#B9B9B9] w-fit rounded-[18px]">
          <div className="flex flex-col items-center">
            <img src={im1} alt="" />
            <span className="text-base font-bold mt-4 mb-1">Jason Price</span>
            <span className="text-sm text-black text-opacity-60">
              kuhlman.jermey@yahoo.com
            </span>
            <div className="flex items-center gap-[13px] py-[11px] px-[26px] border border-[#979797] rounded-md mt-[21px] mb-4">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6875 0.5H1.3125C0.947917 0.5 0.638021 0.627604 0.382812 0.882812C0.127604 1.13802 0 1.44792 0 1.8125V9.6875C0 10.0521 0.127604 10.362 0.382812 10.6172C0.638021 10.8724 0.947917 11 1.3125 11H12.6875C13.0521 11 13.362 10.8724 13.6172 10.6172C13.8724 10.362 14 10.0521 14 9.6875V1.8125C14 1.44792 13.8724 1.13802 13.6172 0.882812C13.362 0.627604 13.0521 0.5 12.6875 0.5ZM12.6875 1.8125V2.93359C12.0495 3.46224 10.819 4.42839 8.99609 5.83203L8.75 6.05078C8.38542 6.36068 8.09375 6.57943 7.875 6.70703C7.52865 6.94401 7.23698 7.0625 7 7.0625C6.76302 7.0625 6.47135 6.94401 6.125 6.70703C5.90625 6.57943 5.61458 6.36068 5.25 6.05078L5.00391 5.83203C3.18099 4.41016 1.95052 3.44401 1.3125 2.93359V1.8125H12.6875ZM1.3125 9.6875V4.60156L4.45703 7.11719C4.93099 7.5 5.30469 7.77344 5.57812 7.9375C6.08854 8.22917 6.5625 8.375 7 8.375C7.4375 8.375 7.90234 8.22917 8.39453 7.9375C8.6862 7.77344 9.0599 7.5 9.51562 7.11719L12.6875 4.60156V9.6875H1.3125Z"
                  fill="#767676"
                />
              </svg>

              <p className="text-[#767676] font-bold font-Nunito">Message</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#B9B9B9] w-fit rounded-[18px]">
          <div className="flex flex-col items-center">
            <img src={im2} alt="" />
            <span className="text-base font-bold mt-4 mb-1">Duane Dean</span>
            <span className="text-sm text-black text-opacity-60">
            rusty.botsford@wilfrid.io   </span>
            <div className="flex items-center gap-[13px] py-[11px] px-[26px] border border-[#979797] rounded-md mt-[21px] mb-4">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6875 0.5H1.3125C0.947917 0.5 0.638021 0.627604 0.382812 0.882812C0.127604 1.13802 0 1.44792 0 1.8125V9.6875C0 10.0521 0.127604 10.362 0.382812 10.6172C0.638021 10.8724 0.947917 11 1.3125 11H12.6875C13.0521 11 13.362 10.8724 13.6172 10.6172C13.8724 10.362 14 10.0521 14 9.6875V1.8125C14 1.44792 13.8724 1.13802 13.6172 0.882812C13.362 0.627604 13.0521 0.5 12.6875 0.5ZM12.6875 1.8125V2.93359C12.0495 3.46224 10.819 4.42839 8.99609 5.83203L8.75 6.05078C8.38542 6.36068 8.09375 6.57943 7.875 6.70703C7.52865 6.94401 7.23698 7.0625 7 7.0625C6.76302 7.0625 6.47135 6.94401 6.125 6.70703C5.90625 6.57943 5.61458 6.36068 5.25 6.05078L5.00391 5.83203C3.18099 4.41016 1.95052 3.44401 1.3125 2.93359V1.8125H12.6875ZM1.3125 9.6875V4.60156L4.45703 7.11719C4.93099 7.5 5.30469 7.77344 5.57812 7.9375C6.08854 8.22917 6.5625 8.375 7 8.375C7.4375 8.375 7.90234 8.22917 8.39453 7.9375C8.6862 7.77344 9.0599 7.5 9.51562 7.11719L12.6875 4.60156V9.6875H1.3125Z"
                  fill="#767676"
                />
              </svg>

              <p className="text-[#767676] font-bold font-Nunito">Message</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#B9B9B9] w-fit rounded-[18px]">
          <div className="flex flex-col items-center">
            <img src={im3} alt="" />
            <span className="text-base font-bold mt-4 mb-1">Jonathan Barker</span>
            <span className="text-sm text-black text-opacity-60">
            cora_haley@quinn.biz
            </span>
            <div className="flex items-center gap-[13px] py-[11px] px-[26px] border border-[#979797] rounded-md mt-[21px] mb-4">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6875 0.5H1.3125C0.947917 0.5 0.638021 0.627604 0.382812 0.882812C0.127604 1.13802 0 1.44792 0 1.8125V9.6875C0 10.0521 0.127604 10.362 0.382812 10.6172C0.638021 10.8724 0.947917 11 1.3125 11H12.6875C13.0521 11 13.362 10.8724 13.6172 10.6172C13.8724 10.362 14 10.0521 14 9.6875V1.8125C14 1.44792 13.8724 1.13802 13.6172 0.882812C13.362 0.627604 13.0521 0.5 12.6875 0.5ZM12.6875 1.8125V2.93359C12.0495 3.46224 10.819 4.42839 8.99609 5.83203L8.75 6.05078C8.38542 6.36068 8.09375 6.57943 7.875 6.70703C7.52865 6.94401 7.23698 7.0625 7 7.0625C6.76302 7.0625 6.47135 6.94401 6.125 6.70703C5.90625 6.57943 5.61458 6.36068 5.25 6.05078L5.00391 5.83203C3.18099 4.41016 1.95052 3.44401 1.3125 2.93359V1.8125H12.6875ZM1.3125 9.6875V4.60156L4.45703 7.11719C4.93099 7.5 5.30469 7.77344 5.57812 7.9375C6.08854 8.22917 6.5625 8.375 7 8.375C7.4375 8.375 7.90234 8.22917 8.39453 7.9375C8.6862 7.77344 9.0599 7.5 9.51562 7.11719L12.6875 4.60156V9.6875H1.3125Z"
                  fill="#767676"
                />
              </svg>

              <p className="text-[#767676] font-bold font-Nunito">Message</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#B9B9B9] w-fit rounded-[18px]">
          <div className="flex flex-col items-center">
            <img src={im4} alt="" />
            <span className="text-base font-bold mt-4 mb-1">Rosie Glover</span>
            <span className="text-sm text-black text-opacity-60">
            lockman.marques@hotmail.com
            </span>
            <div className="flex items-center gap-[13px] py-[11px] px-[26px] border border-[#979797] rounded-md mt-[21px] mb-4">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6875 0.5H1.3125C0.947917 0.5 0.638021 0.627604 0.382812 0.882812C0.127604 1.13802 0 1.44792 0 1.8125V9.6875C0 10.0521 0.127604 10.362 0.382812 10.6172C0.638021 10.8724 0.947917 11 1.3125 11H12.6875C13.0521 11 13.362 10.8724 13.6172 10.6172C13.8724 10.362 14 10.0521 14 9.6875V1.8125C14 1.44792 13.8724 1.13802 13.6172 0.882812C13.362 0.627604 13.0521 0.5 12.6875 0.5ZM12.6875 1.8125V2.93359C12.0495 3.46224 10.819 4.42839 8.99609 5.83203L8.75 6.05078C8.38542 6.36068 8.09375 6.57943 7.875 6.70703C7.52865 6.94401 7.23698 7.0625 7 7.0625C6.76302 7.0625 6.47135 6.94401 6.125 6.70703C5.90625 6.57943 5.61458 6.36068 5.25 6.05078L5.00391 5.83203C3.18099 4.41016 1.95052 3.44401 1.3125 2.93359V1.8125H12.6875ZM1.3125 9.6875V4.60156L4.45703 7.11719C4.93099 7.5 5.30469 7.77344 5.57812 7.9375C6.08854 8.22917 6.5625 8.375 7 8.375C7.4375 8.375 7.90234 8.22917 8.39453 7.9375C8.6862 7.77344 9.0599 7.5 9.51562 7.11719L12.6875 4.60156V9.6875H1.3125Z"
                  fill="#767676"
                />
              </svg>

              <p className="text-[#767676] font-bold font-Nunito">Message</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#B9B9B9] w-fit rounded-[18px]">
          <div className="flex flex-col items-center">
            <img src={im5} alt="" />
            <span className="text-base font-bold mt-4 mb-1">Patrick Greer</span>
            <span className="text-sm text-black text-opacity-60">
            pearlie.eichmann@trevion.net
            </span>
            <div className="flex items-center gap-[13px] py-[11px] px-[26px] border border-[#979797] rounded-md mt-[21px] mb-4">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6875 0.5H1.3125C0.947917 0.5 0.638021 0.627604 0.382812 0.882812C0.127604 1.13802 0 1.44792 0 1.8125V9.6875C0 10.0521 0.127604 10.362 0.382812 10.6172C0.638021 10.8724 0.947917 11 1.3125 11H12.6875C13.0521 11 13.362 10.8724 13.6172 10.6172C13.8724 10.362 14 10.0521 14 9.6875V1.8125C14 1.44792 13.8724 1.13802 13.6172 0.882812C13.362 0.627604 13.0521 0.5 12.6875 0.5ZM12.6875 1.8125V2.93359C12.0495 3.46224 10.819 4.42839 8.99609 5.83203L8.75 6.05078C8.38542 6.36068 8.09375 6.57943 7.875 6.70703C7.52865 6.94401 7.23698 7.0625 7 7.0625C6.76302 7.0625 6.47135 6.94401 6.125 6.70703C5.90625 6.57943 5.61458 6.36068 5.25 6.05078L5.00391 5.83203C3.18099 4.41016 1.95052 3.44401 1.3125 2.93359V1.8125H12.6875ZM1.3125 9.6875V4.60156L4.45703 7.11719C4.93099 7.5 5.30469 7.77344 5.57812 7.9375C6.08854 8.22917 6.5625 8.375 7 8.375C7.4375 8.375 7.90234 8.22917 8.39453 7.9375C8.6862 7.77344 9.0599 7.5 9.51562 7.11719L12.6875 4.60156V9.6875H1.3125Z"
                  fill="#767676"
                />
              </svg>

              <p className="text-[#767676] font-bold font-Nunito">Message</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#B9B9B9] w-fit rounded-[18px]">
          <div className="flex flex-col items-center">
            <img src={im6} alt="" />
            <span className="text-base font-bold mt-4 mb-1">Darrell Ortega</span>
            <span className="text-sm text-black text-opacity-60">
            chaya.shields@ferry.info
            </span>
            <div className="flex items-center gap-[13px] py-[11px] px-[26px] border border-[#979797] rounded-md mt-[21px] mb-4">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6875 0.5H1.3125C0.947917 0.5 0.638021 0.627604 0.382812 0.882812C0.127604 1.13802 0 1.44792 0 1.8125V9.6875C0 10.0521 0.127604 10.362 0.382812 10.6172C0.638021 10.8724 0.947917 11 1.3125 11H12.6875C13.0521 11 13.362 10.8724 13.6172 10.6172C13.8724 10.362 14 10.0521 14 9.6875V1.8125C14 1.44792 13.8724 1.13802 13.6172 0.882812C13.362 0.627604 13.0521 0.5 12.6875 0.5ZM12.6875 1.8125V2.93359C12.0495 3.46224 10.819 4.42839 8.99609 5.83203L8.75 6.05078C8.38542 6.36068 8.09375 6.57943 7.875 6.70703C7.52865 6.94401 7.23698 7.0625 7 7.0625C6.76302 7.0625 6.47135 6.94401 6.125 6.70703C5.90625 6.57943 5.61458 6.36068 5.25 6.05078L5.00391 5.83203C3.18099 4.41016 1.95052 3.44401 1.3125 2.93359V1.8125H12.6875ZM1.3125 9.6875V4.60156L4.45703 7.11719C4.93099 7.5 5.30469 7.77344 5.57812 7.9375C6.08854 8.22917 6.5625 8.375 7 8.375C7.4375 8.375 7.90234 8.22917 8.39453 7.9375C8.6862 7.77344 9.0599 7.5 9.51562 7.11719L12.6875 4.60156V9.6875H1.3125Z"
                  fill="#767676"
                />
              </svg>

              <p className="text-[#767676] font-bold font-Nunito">Message</p>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Contect;
