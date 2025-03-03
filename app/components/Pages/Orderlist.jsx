import React from "react";

const Orderlist = () => {
  const orders = [
    {
      id: "00001",
      name: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      date: "04 Sep 2019",
      type: "Electric",
      status: "Completed",
    },
    {
      id: "00002",
      name: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      date: "28 May 2019",
      type: "Book",
      status: "Processing",
    },
    {
      id: "00003",
      name: "Darrell Caldwell",
      address: "8587 Frida Ports",
      date: "23 Nov 2019",
      type: "Medicine",
      status: "Rejected",
    },
    {
      id: "00004",
      name: "Gilbert Johnston",
      address: "768 Destiny Lake Suite 600",
      date: "05 Feb 2019",
      type: "Mobile",
      status: "Completed",
    },
    {
      id: "00005",
      name: "Alan Cain",
      address: "042 Mylene Throughway",
      date: "29 Jul 2019",
      type: "Watch",
      status: "Processing",
    },
    {
      id: "00006",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "15 Aug 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "00007",
      name: "Maggie Sullivan",
      address: "New Scottieberg",
      date: "21 Dec 2019",
      type: "Watch",
      status: "Processing",
    },
    {
      id: "00008",
      name: "Rosie Todd",
      address: "New Jon",
      date: "30 Apr 2019",
      type: "Medicine",
      status: "On Hold",
    },
    {
      id: "00009",
      name: "Dollie Hines",
      address: "124 Lyla Forge Suite 975",
      date: "09 Jan 2019",
      type: "Book",
      status: "In Transit",
    },
  ];

  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-purple-100 text-purple-700",
    Rejected: "bg-red-100 text-red-700",
    "On Hold": "bg-yellow-100 text-yellow-700",
    "In Transit": "bg-blue-100 text-blue-700",
  };
  return (
    <div>
      <div className="w-full bg-[#F5F6FA] min-h-screen p-[30px]">
        <h1 className="text-[32px] font-bold text-[#202224] mb-6 font-Nunito">
          Order Lists
        </h1>
        <div className="overflow-x-auto font-Nunito font-bold text-[#202224] border border-gray-300 w-fit rounded-[10px]">
          <table className=" bg-[#F9F9FB] w-auto rounded-[10px]">
            <tbody>
              <tr>
                <td className="border-r border-gray-300 p-6  first:rounded-tl-[14px] last:rounded-tr-[14px]">
                  <div className="flex items-center">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 9.75C16.3848 9.75 20.75 7.73528 20.75 5.25C20.75 2.76472 16.3848 0.75 11 0.75C5.61522 0.75 1.25 2.76472 1.25 5.25C1.25 7.73528 5.61522 9.75 11 9.75Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.25 5.25C1.25253 9.76548 4.35614 13.688 8.75 14.729V21C8.75 22.2426 9.75736 23.25 11 23.25C12.2426 23.25 13.25 22.2426 13.25 21V14.729C17.6439 13.688 20.7475 9.76548 20.75 5.25"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </td>

                <td className="border-r border-gray-300 p-6">
                  <h4 className="text-sm font-medium">Filter By</h4>
                </td>

                {["Date", "Order Type", "Order Status"].map((filter, index) => (
                  <td key={index} className="border-r border-gray-300 p-6">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium">{filter}</h3>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.415 8.71L12 13.295L16.585 8.71L18 10.125L12 16.125L6 10.125L7.415 8.71Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </td>
                ))}

                <td className="py-6 pl-6 pr-[43px] text-red-500 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3.75V0.75L5.25 4.5L9 8.25V5.25C11.4825 5.25 13.5 7.2675 13.5 9.75C13.5 12.2325 11.4825 14.25 9 14.25C6.5175 14.25 4.5 12.2325 4.5 9.75H3C3 13.065 5.685 15.75 9 15.75C12.315 15.75 15 13.065 15 9.75C15 6.435 12.315 3.75 9 3.75Z"
                        fill="#EA0234"
                      />
                    </svg>
                    <h3 className="text-sm font-medium">Reset Filter</h3>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <div className="overflow-x-auto font-Nunito border border-[#D5D5D5] rounded-[14px]">
            <table className="w-full  bg-white rounded-lg ">
              <thead className="bg-[#FCFDFD] text-[#202224] uppercase text-sm  ">
                <tr>
                  <th className="px-[31px] py-4 text-left ">ID</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Address</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left ">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#202224] overflow-y-auto">
                {orders.map((order, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-8 py-6">{order.id}</td>
                    <td className="px-4 py-3">{order.name}</td>
                    <td className="px-4 py-3">{order.address}</td>
                    <td className="px-4 py-3">{order.date}</td>
                    <td className="px-4 py-3">{order.type}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-4 py-1 rounded-md text-xs font-semibold ${
                          statusColors[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between">
          <p className="text-sm font-Nunito text-black text-opacity-60">
            Showing 1-09 of 78
          </p>
          <div className="flex border border-[#D5D5D5] rounded-lg">
            <div className="flex divide-x divide-[#D5D5D5]">
              <div className="p-2 flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6">
                    <path
                      d="M15.41 16.4064L10.83 12L15.41 7.59359L14 6.23999L8 12L14 17.76L15.41 16.4064Z"
                      fill="#202224"
                    />
                  </g>
                </svg>
              </div>
              <div className="p-2 flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      d="M8.59 16.4064L13.17 12L8.59 7.59359L10 6.23999L16 12L10 17.76L8.59 16.4064Z"
                      fill="#202224"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderlist;
