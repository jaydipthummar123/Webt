import React from "react";
import img from "../../images/Image (2).png";
import img2 from "../../images/Image (3).png"
import img3 from "../../images/Image (4).png"
import img4 from "../../images/Image (5).png"

const ProductStock = () => {
  const products = [
    {
      id: 1,
      image: img,
      name: "Apple Watch Series 4",
      category: "Digital Product",
      price: "$690.00",
      piece: 63,
      colors: ["black", "gray", "pink", "red"],
    },
    {
      id: 2,
      image: img2,
      name: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      piece: 13,
      colors: ["black", "blue", "pink", "yellow"],
    },
    {
      id: 3,
      image: img3,
      name: "Women's Dress",
      category: "Fashion",
      price: "$640.00",
      piece: 635,
      colors: ["purple", "blue", "pink", "navy"],
    },
    {
      id: 4,
      image: img4,
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: 67,
      colors: ["black", "blue", "red"],
    },
    {
      id: 4,
      image: img4,
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: 67,
      colors: ["black", "blue", "red"],
    },
    {
      id: 4,
      image: img4,
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: 67,
      colors: ["black", "blue", "red"],
    },
    {
      id: 4,
      image: img4,
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: 67,
      colors: ["black", "blue", "red"],
    },
    {
      id: 4,
      image: img4,
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: 67,
      colors: ["black", "blue", "red"],
    },
 
  ];


  const colorClasses = {
    black: "bg-black",
    gray: "bg-gray-500",
    pink: "bg-pink-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    navy: "bg-indigo-700",
  };
  return (
    <div className="w-full bg-[#F5F6FA] min-h-screen p-[30px]">
      <div className="flex justify-between flex-wrap ">
        <h1 className="text-[32px] font-bold text-[#202224]">Product Stock</h1>
        <div className="w-[200px] sm:w-[250px] md:w-[300px] bg-white flex items-center px-4 py-[10px] rounded-full font-Nunito text-black">
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
            placeholder="Search product name"
            className="bg-white focus:outline-none  pl-2 text-sm"
          />
        </div>
      </div>
      <div className="mt-[27px]">
        {/* <div className="container mx-auto  font-Nunito">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg ">
          <thead>
            <tr className="border-b border-[#D5D5D5] text-left ">
              {["Image", "Product Name", "Category", "Price", "Piece", "Available Color", "Action"].map(
                (header) => (
                  <th key={header} className="px-10 pt-4 pb-3 text-[#202224] font-semibold">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="pl-[30px] pt-6 pb-[25px] ">
                  <img src={product.image} alt={product.name} className="h-12 w-12 rounded-lg object-cover" />
                </td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3 font-semibold">{product.price}</td>
                <td className="p-3">{product.piece}</td>
                <td className="pt-11  pl-24 flex space-x-2 ">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`h-5 w-5 rounded-full border border-gray-300 ${colorClasses[color] || "bg-gray-200"} `}
                    ></span>
                  ))}
                </td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                  
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                  
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
        <p>Showing 1-9 of 78</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded">{"<"}</button>
          <button className="px-3 py-1 border rounded">{">"}</button>
        </div>
      </div>
    </div> */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg font-Nunito">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#D5D5D5]">
                {[
                  "Image",
                  "Product Name",
                  "Category",
                  "Price",
                  "Piece",
                  "Available Color",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-[#202224] font-bold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4 font-semibold">{product.price}</td>
                  <td className="px-6 py-4">{product.piece}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className={`h-5 w-5 rounded-full border border-gray-300 ${
                            colorClasses[color] || "bg-gray-200"
                          }`}
                        ></span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-6 flex space-x-2 ">
                    <div className="flex border border-[#D5D5D5]  rounded-lg bg-[#FAFBFD]">
                      <div className="flex divide-x divide-[#D5D5D5] ">
                        <div className="px-4 py-2 flex items-center ">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.69732 10.424L7.22266 10.778L7.57599 8.30267L13.94 1.93867C14.5258 1.35288 15.4755 1.35288 16.0613 1.93867C16.6471 2.52446 16.6471 3.47421 16.0613 4.06L9.69732 10.424Z"
                                stroke="black"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.2324 2.646L15.3538 4.76733"
                                stroke="black"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                                stroke="black"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="px-4 py-2 flex items-center">
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
                              d="M13.1996 15.4H4.79961C4.13687 15.4 3.59961 14.8627 3.59961 14.2V3.4H14.3996V14.2C14.3996 14.8627 13.8624 15.4 13.1996 15.4Z"
                              stroke="#EF3826"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.20078 11.8V7"
                              stroke="#EF3826"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.8004 11.8V7"
                              stroke="#EF3826"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.19922 3.4H16.7992"
                              stroke="#EF3826"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                              stroke="#EF3826"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
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
  );
};

export default ProductStock;
