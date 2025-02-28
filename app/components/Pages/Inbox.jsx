import React from "react";

const Inbox = () => {
  const emails = [
    {
      id: 1,
      name: "Jullu Jalal",
      tag: "Primary",
      tagColor: "bg-teal-100 text-teal-600",
      subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      checked: true,
      starred: false,
    },
    {
      id: 2,
      name: "Minerva Barnett",
      tag: "Work",
      tagColor: "bg-orange-100 text-orange-600",
      subject: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      checked: true,
      starred: false,
    },
    {
      id: 3,
      name: "Peter Lewis",
      tag: "Friends",
      tagColor: "bg-pink-100 text-pink-600",
      subject: "Vacation Home Rental Success",
      time: "7:52 PM",
      checked: false,
      starred: false,
    },
    {
      id: 4,
      name: "Anthony Briggs",
      tag: "",
      tagColor: "",
      subject: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      checked: true,
      starred: true,
    },
    {
      id: 5,
      name: "Clifford Morgan",
      tag: "Social",
      tagColor: "bg-blue-100 text-blue-600",
      subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      checked: false,
      starred: false,
    },
    {
      id: 6,
      name: "Cecilia Webster",
      tag: "Friends",
      tagColor: "bg-pink-100 text-pink-600",
      subject: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      checked: false,
      starred: false,
    },
    {
      id: 7,
      name: "Harvey Manning",
      tag: "",
      tagColor: "bg-teal-100 text-teal-600",
      subject: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "8:38 AM",
      checked: false,
      starred: true,
    },
    {
      id: 8,
      name: "Willie Blake",
      tag: "Primary",
      tagColor: "bg-teal-100 text-teal-600",
      subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "2:30 PM",
      checked: false,
      starred: false,
    },
    {
      id: 9,
      name: "Minerva Barnett",
      tag: "Work",
      tagColor: "bg-orange-100 text-orange-600",
      subject: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "2:30 PM",
      checked: true,
      starred: false,
    },

    {
      id: 9,
      name: "Minerva Barnett",
      tag: "Work",
      tagColor: "bg-orange-100 text-orange-600",
      subject: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "2:30 PM",
      checked: true,
      starred: false,
    },
  ];
  return (
    <>
      <div className="w-full bg-[#F5F6FA] min-h-screen p-[30px]">
        <h1 className="text-[32px] font-bold text-[#202224]">Inbox</h1>
        <div className="flex  flex-wrap mt-6">
          <div className="compose border border-[#B9B9B9] rounded-[14px] bg-[#FFFFFF] p-6 mx-auto">
            <div className="bg-[#4880FF] py-3 px-[83px] rounded-lg">
              <h1 className="font-Nunito font-bold text-sm text-white">
                {" "}
                + Compose
              </h1>
            </div>
            <div className="pt-6">
              <h3 className="font-Nunito text-base font-bold">My Email</h3>
              <div className="pt-4">
                <div className="px-4 py-3 flex items-center justify-between  bg-[#4880FF] bg-opacity-10      text-[#4880FF] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.36328"
                        y="1.54545"
                        width="15.2727"
                        height="10.9091"
                        rx="1.5"
                        stroke="#4880FF"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.39 1.94545L10.4671 6.50109C9.60228 7.16636 8.39806 7.16636 7.53326 6.50109L1.61035 1.94545"
                        stroke="#4880FF"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h3 className="font-Nunito font-bold text-sm">Inbox</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">1253</h3>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.48588 1.8L11.7165 6.21933L16.0099 6.64467C16.2186 6.66201 16.3981 6.79917 16.4698 6.99597C16.5414 7.19277 16.492 7.41325 16.3432 7.56067L12.8099 11.0627L14.1199 15.8213C14.1746 16.0275 14.1034 16.2466 13.9378 16.3811C13.7722 16.5156 13.5431 16.5405 13.3525 16.4447L8.99988 14.2893L4.65322 16.442C4.46263 16.5378 4.23356 16.513 4.06799 16.3785C3.90241 16.244 3.83113 16.0248 3.88588 15.8187L5.19588 11.06L1.65988 7.558C1.51114 7.41058 1.46173 7.1901 1.53335 6.9933C1.60496 6.79651 1.78451 6.65934 1.99322 6.642L6.28655 6.21667L8.51388 1.8C8.60728 1.61759 8.79495 1.50284 8.99988 1.50284C9.20481 1.50284 9.39249 1.61759 9.48588 1.8Z"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className="font-Nunito font-bold text-sm">Starred</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">245</h3>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.36671 6.92466C0.948123 6.80658 0.655386 6.42944 0.644826 5.99464C0.634266 5.55984 0.908349 5.16893 1.32071 5.03066L14.7014 0.666665C14.8801 0.608408 15.0764 0.655157 15.2096 0.787718C15.3429 0.92028 15.3907 1.11631 15.3334 1.29533L10.9727 14.6827C10.8351 15.0958 10.4438 15.3706 10.0085 15.3598C9.57314 15.3491 9.19586 15.0554 9.07871 14.636L7.58138 8.41533L1.36671 6.92466Z"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.2097 0.786667L7.58105 8.41533"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className="font-Nunito font-bold text-sm">Sent</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">24,532</h3>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.7933 2.20666C15.3346 1.74992 14.7124 1.49544 14.0651 1.49982C13.4178 1.5042 12.7991 1.76709 12.3467 2.23L2.68 11.8967L1.5 16.5L6.10333 15.3193L15.77 5.65266C16.233 5.2004 16.496 4.58177 16.5004 3.93453C16.5048 3.28729 16.2502 2.66516 15.7933 2.20666Z"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className="font-Nunito font-bold text-sm">Draft</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">09</h3>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.50033 12.9998C8.36225 12.9998 8.25033 13.1118 8.25033 13.2498C8.25033 13.3879 8.36225 13.4998 8.50033 13.4998C8.6384 13.4998 8.75033 13.3879 8.75033 13.2498C8.75033 13.1118 8.6384 12.9998 8.50033 12.9998V12.9998"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.50033 10.9998V5.99985"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.58067 1.67317C9.37826 1.2611 8.95911 1 8.50001 1C8.0409 1 7.62175 1.2611 7.41934 1.67317L1.10401 14.5385C0.949457 14.8529 0.968142 15.2248 1.15343 15.5221C1.33871 15.8195 1.66434 16.0001 2.01467 15.9998H14.9853C15.3357 16.0001 15.6613 15.8195 15.8466 15.5221C16.0319 15.2248 16.0506 14.8529 15.896 14.5385L9.58067 1.67317Z"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className="font-Nunito font-bold text-sm">Spam</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">14</h3>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3493 8.13333L13.644 9.102C13.7449 9.43561 14.087 9.63404 14.4267 9.556L15.408 9.32867C15.79 9.242 16.1838 9.41464 16.3789 9.75427C16.5739 10.0939 16.5246 10.5211 16.2573 10.8073L15.5707 11.548C15.3327 11.8039 15.3327 12.2001 15.5707 12.456L16.2573 13.1967C16.5246 13.4829 16.5739 13.9101 16.3789 14.2497C16.1838 14.5894 15.79 14.762 15.408 14.6753L14.4267 14.448C14.087 14.37 13.7449 14.5684 13.644 14.902L13.3493 15.8667C13.2369 16.2418 12.8916 16.4988 12.5 16.4988C12.1084 16.4988 11.7631 16.2418 11.6507 15.8667L11.3553 14.898C11.2547 14.5645 10.9129 14.366 10.5733 14.444L9.59134 14.6713C9.20938 14.758 8.81556 14.5854 8.62048 14.2457C8.4254 13.9061 8.4747 13.4789 8.74201 13.1927L9.42867 12.452C9.66664 12.1961 9.66664 11.7999 9.42867 11.544L8.74201 10.8033C8.4747 10.5171 8.4254 10.0899 8.62048 9.75027C8.81556 9.41064 9.20938 9.238 9.59134 9.32467L10.5733 9.552C10.9129 9.62999 11.2547 9.43151 11.3553 9.098L11.6507 8.12933C11.764 7.75445 12.1099 7.49832 12.5015 7.49924C12.8931 7.50016 13.2378 7.75792 13.3493 8.13333Z"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.424 7.46666C16.0122 4.64865 13.9342 2.36103 11.1686 1.68117C8.403 1.00131 5.5012 2.06475 3.82982 4.37066C2.15843 6.67658 2.05069 9.76522 3.55733 12.182L1.5 16.5L5.816 14.444C6.04325 14.5854 6.27829 14.7138 6.52 14.8287"
                        stroke="#202224"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className="font-Nunito font-bold text-sm">Important</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">18</h3>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1996 15.4H4.79961C4.13687 15.4 3.59961 14.8627 3.59961 14.2V3.39999H14.3996V14.2C14.3996 14.8627 13.8624 15.4 13.1996 15.4Z"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.1998 11.8V7"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8004 11.8V7"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.2002 3.4H16.8002"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className="font-Nunito font-bold text-sm">Bin</h3>
                  </div>
                  <h3 className="font-Nunito font-bold text-sm">9</h3>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="font-Nunito font-bold text-base">Label</h1>
              <div className="pt-4">
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <input
                      type="checkbox"
                      className="border-2 appearance-none w-4 h-4 checked:bg-[#00B69B] rounded-sm border-[#00B69B] focus:outline-none"
                    />
                    <h3 className="font-Nunito font-bold text-sm">Bin</h3>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <input
                      type="checkbox"
                      className="border-2 appearance-none w-4 h-4 checked:bg-[#5A8CFF] rounded-sm border-[#5A8CFF] focus:outline-none"
                    />
                    <h3 className="font-Nunito font-bold text-sm">Social</h3>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <input
                      type="checkbox"
                      className="border-2 appearance-none w-4 h-4 checked:bg-[#FD9A56] rounded-sm border-[#FD9A56] focus:outline-none"
                    />
                    <h3 className="font-Nunito font-bold text-sm">Work</h3>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-[##202224] rounded ">
                  <div className="flex items-center  gap-3 ">
                    <input
                      type="checkbox"
                      className="border-2 appearance-none w-4 h-4 checked:bg-[#D456FD] rounded-sm border-[#D456FD] focus:outline-none"
                    />
                    <h3 className="font-Nunito font-bold text-sm">Friends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 mt- flex items-center justify-between text-[#202224] text-opacity-50 rounded ">
              <div className="flex items-center gap-3 ">
                <p>+</p>
                <h3 className="font-Nunito font-bold text-sm">
                  Create New Label
                </h3>
              </div>
            </div>
          </div>
          {/* <div className="searchmailbox mx-auto ">
            <div className="bg-white rounded-[14px] border border-[#B9B9B9] ">
              <div className="px-6 pt-6  flex ">
                <div className=" bg-[#F5F6FA] flex items-center px-4 py-3 rounded-full w-[332px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3902 11.3896L15.5556 15.5555"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  <input
                    type="text"
                    placeholder=" Search mail"
                    className="bg-[#F5F6FA] focus:outline-none w-full pl-2 text-sm"
                  />
                </div>
                <div className="ml-[323px] flex border border-[#979797] bg-[#FAFBFD] divide-x divide-[#979797]">
                  <div className="p-3 flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2222 0H1.76889C0.786667 0 0.00888889 0.795556 0.00888889 1.77778L0 14.2222C0 15.2044 0.786667 16 1.76889 16H14.2222C15.2044 16 16 15.2044 16 14.2222V1.77778C16 0.795556 15.2044 0 14.2222 0ZM14.2222 10.6667H10.6667C10.6667 12.1378 9.47111 13.3333 8 13.3333C6.52889 13.3333 5.33333 12.1378 5.33333 10.6667H1.76889V1.77778H14.2222V10.6667ZM9.77778 6.22222H11.5556L8 9.77778L4.44444 6.22222H6.22222V3.55556H9.77778V6.22222Z"
                        fill="#202224"
                      />
                    </svg>
                  </div>
                  <div className="p-3 flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM7.2 12V7.2H8.8V12H7.2ZM7.2 4V5.6H8.8V4H7.2Z"
                        fill="#202224"
                      />
                    </svg>
                  </div>
                  <div className="p-3 flex items-center">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.33333 0.888889H12.4444V2.66667H0V0.888889H3.11111L4 0H8.44444L9.33333 0.888889ZM2.66667 16C1.68889 16 0.888889 15.2 0.888889 14.2222V3.55556H11.5556V14.2222C11.5556 15.2 10.7556 16 9.77778 16H2.66667Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
             
              <div className="divide-y mt-8 bg-[#4880FF] bg-opacity-5 font-Nunito ">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className="flex items-center px-5 pt-6 pb-[22px] hover:bg-gray-100 "
                  >
                    <input
                      type="checkbox"
                      checked={email.checked}
                      className="w-5 h-5 border-2 border-gray-400 rounded focus:ring-2 focus:ring-teal-400 bg-black"
                    />
                    <button className="ml-3 text-xl">
                      {email.starred ? "⭐" : "☆"}
                    </button>
                    <p className="ml-3 font-bold mr-[84px] font-Nunito text-sm">
                      {email.name}
                    </p>
                    {email.tag && (
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded ${email.tagColor}`}
                      >
                        {email.tag}
                      </span>
                    )}
                    <p className="ml-4 text-gray-600 flex-1">{email.subject}</p>
                    <p className="ml-auto text-sm text-gray-500">
                      {email.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-Nunito text-black text-opacity-60 ">
                Showing 1-12 of 1,253
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
          </div> */}
          <div className="searchmailbox mx-auto px-4">
  <div className="bg-white rounded-[14px] border border-[#B9B9B9]">
    <div className="px-6 pt-6 flex flex-wrap items-center gap-4 justify-between">
      {/* Search Input */}
      <div className="bg-[#F5F6FA] flex items-center px-4 py-3 rounded-full w-full sm:w-[332px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z"
              stroke="black"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3902 11.3896L15.5556 15.5555"
              stroke="black"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <input
          type="text"
          placeholder="Search mail"
          className="bg-[#F5F6FA] focus:outline-none w-full pl-2 text-sm"
        />
      </div>
      {/* Icon Controls */}
      <div className="flex border border-[#979797] bg-[#FAFBFD] divide-x divide-[#979797] rounded-md">
        <div className="p-3 flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2222 0H1.76889C0.786667 0 0.00888889 0.795556 0.00888889 1.77778L0 14.2222C0 15.2044 0.786667 16 1.76889 16H14.2222C15.2044 16 16 15.2044 16 14.2222V1.77778C16 0.795556 15.2044 0 14.2222 0ZM14.2222 10.6667H10.6667C10.6667 12.1378 9.47111 13.3333 8 13.3333C6.52889 13.3333 5.33333 12.1378 5.33333 10.6667H1.76889V1.77778H14.2222V10.6667ZM9.77778 6.22222H11.5556L8 9.77778L4.44444 6.22222H6.22222V3.55556H9.77778V6.22222Z"
              fill="#202224"
            />
          </svg>
        </div>
        <div className="p-3 flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM7.2 12V7.2H8.8V12H7.2ZM7.2 4V5.6H8.8V4H7.2Z"
              fill="#202224"
            />
          </svg>
        </div>
        <div className="p-3 flex items-center">
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.33333 0.888889H12.4444V2.66667H0V0.888889H3.11111L4 0H8.44444L9.33333 0.888889ZM2.66667 16C1.68889 16 0.888889 15.2 0.888889 14.2222V3.55556H11.5556V14.2222C11.5556 15.2 10.7556 16 9.77778 16H2.66667Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
    {/* Email List */}
    <div className="divide-y mt-8 bg-[#4880FF] bg-opacity-5 font-Nunito">
      {emails.map((email) => (
        <div
          key={email.id}
          className="flex flex-wrap items-center px-5 pt-6 pb-[22px] hover:bg-gray-100"
        >
          <input
            type="checkbox"
            checked={email.checked}
            className="w-5 h-5 border-2 border-gray-400 rounded focus:ring-2 focus:ring-teal-400 bg-black"
          />
          <button className="ml-3 text-xl">
            {email.starred ? "⭐" : "☆"}
          </button>
          <p className="ml-3 font-bold mr-4 sm:mr-[84px] font-Nunito text-sm">
            {email.name}
          </p>
          {email.tag && (
            <span
              className={`px-3 py-1 text-xs font-medium rounded ${email.tagColor}`}
            >
              {email.tag}
            </span>
          )}
          <p className="ml-4 text-gray-600 flex-1">{email.subject}</p>
          <p className="ml-auto text-sm text-gray-500">{email.time}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="mt-6 flex flex-wrap items-center justify-between">
    <p className="text-sm font-Nunito text-black text-opacity-60">
      Showing 1-12 of 1,253
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
      </div>
    </>
  );
};

export default Inbox;
