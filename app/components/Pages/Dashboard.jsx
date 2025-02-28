// import React from "react";
// import im1 from "../../images/Icon (1).jpg";
// import arrow1 from "../../images/Path.jpg";
// import im2 from "../../images/icon (3).jpg";
// import im3 from "../../images/Icon (4).jpg";
// import im4 from "../../images/Icon (5).jpg"
// import arro2 from "../../images/Path (1).jpg"

// const Dashboard = () => {
//   return (
//     <div className="bg-[#F5F6FA] w-full px-7 py-7">
//       <h2 className="text-3xl font-bold font-Nunito font mb-6">Dashboard</h2>

//       <div className="flex justify-between gap-5">
//         <div className="flex  justify-between w-[262px] bg-white shadow-md p-2 rounded-2xl ">
//           <div className="rounded-lg pl-2 pb-2">
//             <h3 className="text-base font-Nunito  font mb-3">Total Users</h3>
//             <p className="text-[28px] font-bold font-Nunito font pb-5">
//               40,689
//             </p>
//             <div className="flex items-center gap-2">
//               <img src={arrow1} alt="" />
//               <h2 className=" text-sm">
//                 <span className="">8.5%</span> Up from yesterday
//               </h2>
//             </div>
//           </div>

//           <div>
//             <img src={im1} alt="" />
//           </div>
//         </div>

//         <div className="flex  justify-between w-[262px] bg-white shadow-md p-2 rounded-2xl">
//           <div className="rounded-lg pl-2 pb-2">
//             <h3 className="text-base font-Nunito  font mb-3">Total Order</h3>
//             <p className="text-[28px] font-bold font-Nunito font pb-5">
//             10293
//             </p>
//             <div className="flex items-center gap-2">
//                    <img src={arrow1} alt="" />
//               <h2 className=" text-sm">
//                 <span className="text-[#00B69B]">1.3%</span> Up from  week
//               </h2>
//             </div>
//           </div>

//           <div>
//             <img src={im2} alt="" />
//           </div>
//         </div>

//         <div className="flex  justify-between w-[262px] bg-white shadow-md p-2 rounded-2xl">
//           <div className="rounded-lg  pb-2">
//             <h3 className="text-base font-Nunito  font mb-3">Total Sales</h3>
//             <p className="text-[28px] font-bold font-Nunito font pb-5">
//             $89,000
//             </p>
//             <div className="flex items-center gap-2">
//               <img src={arro2} alt="" />
//               <h2 className=" text-sm">
//                 <span className="text-[#F93C65]">4.3%</span> Down from yesterday
//               </h2>
//             </div>
//           </div>

//           <div>
//             <img src={im3} alt="" />
//           </div>
//         </div>

//         <div className="flex  justify-between w-[262px] bg-white shadow-md p-2 rounded-2xl">
//           <div className="rounded-lg pl-2 pb-2">
//             <h3 className="text-base font-Nunito  font mb-3">Total Pending</h3>
//             <p className="text-[28px] font-bold font-Nunito font pb-5">
//             2040
//             </p>
//             <div className="flex items-center gap-2">
//               <img src={arrow1} alt="" />
//               <h2 className=" text-sm">
//                 <span className=" text-[#00B69B]">1.8%</span> up from yesterday
//               </h2>
//             </div>
//           </div>

//           <div>
//             <img src={im4} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;
import React from "react";
import im1 from "../../images/Icon (1).jpg";
import arrow1 from "../../images/Path.jpg";
import im2 from "../../images/icon (3).jpg";
import im3 from "../../images/Icon (4).jpg";
import im4 from "../../images/Icon (5).jpg";
import arro2 from "../../images/Path (1).jpg";
import tbimg from "../../images/Bitmap (1).jpg";
import SalesChart from "../SalesChart";

const Dashboard = () => {
  return (
    <div className="bg-[#F5F6FA] w-full min-h-screen px-[30px] pt-[30px]">
      <h2 className="text-3xl font-bold mb-7">Dashboard</h2>
        <div className="flex flex-wrap gap-[30px] justify-between">
  {[
    {
      title: "Total Users",
      value: "40,689",
      change: "8.5%",
      trend: "Up from yesterday",
      img: im1,
      arrow: arrow1,
      color: "text-[#00B69B]",
    },
    {
      title: "Total Orders",
      value: "10,293",
      change: "1.3%",
      trend: "Up from week",
      img: im2,
      arrow: arrow1,
      color: "text-[#00B69B]",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      change: "4.3%",
      trend: "Down from yesterday",
      img: im3,
      arrow: arro2,
      color: "text-[#F93C65]",
    },
    {
      title: "Total Pending",
      value: "2,040",
      change: "1.8%",
      trend: "Up from yesterday",
      img: im4,
      arrow: arrow1,
      color: "text-[#00B69B]",
    },
  ].map((card, index) => (
    <div key={index} className="bg-white shadow-md p-4 rounded-2xl w-[262px] flex-shrink-0">
      <div className="flex justify-between">
        <div>
          <h3 className="text-base pb-4 text-[#202224]">{card.title}</h3>
          <p className="text-[28px] font-bold pb-7">{card.value}</p>
        </div>
        <img src={card.img} alt={card.title} className="w-12 h-12" />
      </div>
      <div className="flex gap-2 items-center">
        <img src={card.arrow} alt="arrow" className="w-6 h-6" />
        <h2 className="text-md">
          <span className={`${card.color} font-semibold`}>{card.change}</span> {card.trend}
        </h2>
      </div>
    </div>
  ))}
</div>

      <div className="mt-8 ">
        <SalesChart />
      </div>

      {/* <div className="mt-7">
        <div className="overflow-x-auto"> 
          <div className="bg-white shadow-lg rounded-2xl  ">
            <div className="flex justify-between items-center pt-9 px-8 ">
              <h2 className="text-2xl font-bold mb-4 font-Nunito">
                Deals Details
              </h2>
              <div className="flex items-center gap-2  py-1 px-4 bg-[#FCFDFD] rounded-sm border border-[#D5D5D5]">
                <h6 className="text-xs  text-[#2B303466]">October</h6>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.85892 0.268115L5 4.29356L1.14108 0.268115C0.836791 -0.0819238 0.532503 -0.0892166 0.228216 0.246237C-0.076072 0.581691 -0.076072 0.909853 0.228216 1.23072L4.54357 5.78123C4.65422 5.92708 4.80636 6 5 6C5.19364 6 5.34578 5.92708 5.45643 5.78123L9.77178 1.23072C10.0761 0.909853 10.0761 0.581691 9.77178 0.246237C9.4675 -0.0892166 9.16321 -0.0819238 8.85892 0.268115Z"
                    fill="#2B3034"
                    fill-opacity="0.4"
                  />
                </svg>
              </div>
            </div>

            <div className="p-8">
              <table className="min-w-full rounded-table">
                <thead className="bg-[#F1F4F9] text-[#202224] font-Nunito text-sm">
                  <tr className="bg-[#F1F4F9]">
                    <th className="p-4 text-left">Product Name</th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Date - Time</th>
                    <th className="p-4 text-left">Piece</th>
                    <th className="p-4 text-left">Amount</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>

                <tbody className="bg-white  font-Nunito">
                  <tr className="border-t ">
                    <td className="px-2 py-6 flex items-center space-x-3">
                      <img
                        src={tbimg}
                        alt="Product"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>Apple Watch</span>
                    </td>
                    <td className="px-4 py-3">6096 Marjolaine Landing</td>
                    <td className="px-4 py-3">12.09.2019 - 12:53 PM</td>
                    <td className="px-4 py-3">423</td>
                    <td className="px-4 py-3">$34,295</td>
                    <td className="px-4 py-3">
                      <span className="bg-[#00B69B] text-white text-sm px-4 py-1 rounded-full">
                        Delivered
                      </span>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-7">
        <div className="overflow-x-auto  bg-white rounded-2xl">
          <div className="  overflow-hidden">
            {/* Header Section */}
            <div className="flex justify-between items-center pt-9 px-8">
              <h2 className="text-2xl font-bold mb-4 font-Nunito">
                Deals Details
              </h2>
              <div className="flex items-center gap-2 py-1 px-4 bg-[#FCFDFD] rounded-sm border border-[#D5D5D5]">
                <h6 className="text-xs text-[#2B303466]">October</h6>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.85892 0.268115L5 4.29356L1.14108 0.268115C0.836791 -0.0819238 0.532503 -0.0892166 0.228216 0.246237C-0.076072 0.581691 -0.076072 0.909853 0.228216 1.23072L4.54357 5.78123C4.65422 5.92708 4.80636 6 5 6C5.19364 6 5.34578 5.92708 5.45643 5.78123L9.77178 1.23072C10.0761 0.909853 10.0761 0.581691 9.77178 0.246237C9.4675 -0.0892166 9.16321 -0.0819238 8.85892 0.268115Z"
                    fill="#2B3034"
                    fill-opacity="0.4"
                  />
                </svg>
              </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto p-5">
              <table className="min-w-full rounded-table">
                {/* Table Head */}
                <thead className="bg-[#F1F4F9] text-[#202224] font-Nunito">
                  <tr className="bg-[#F1F4F9]">
                    <th className="p-4 text-left first:rounded-tl-lg last:rounded-tr-lg">
                      Product Name
                    </th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Date - Time</th>
                    <th className="p-4 text-left">Piece</th>
                    <th className="p-4 text-left">Amount</th>
                    <th className="p-4 text-left last:rounded-tr-lg">Status</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-white font-Nunito overflow-y-auto ">
                  <tr className="border-t">
                    <td className="px-2 py-6 flex items-center space-x-3 first:rounded-bl-lg last:rounded-br-lg">
                      <img
                        src={tbimg}
                        alt="Product"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>Apple Watch</span>
                    </td>
                    <td className="px-4 py-3">6096 Marjolaine Landing</td>
                    <td className="px-4 py-3">12.09.2019 - 12:53 PM</td>
                    <td className="px-4 py-3">423</td>
                    <td className="px-4 py-3">$34,295</td>
                    <td className="px-4 py-3 last:rounded-br-lg">
                      <span className="bg-[#00B69B] text-white text-sm px-4 py-1 rounded-full">
                        Delivered
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
