import React from "react";
import im2 from "../../images/Image (8).jpg";

const Favorites = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 131,
    },
    {
      id: 2,
      name: "Air-Max-270",
      price: "$$60.00",
      rating: 4,
      reviews: 64,
    },
    {
      id: 3,
      name: "Minimal Chair Tool",
      price: "$24.59",
      rating: 5,
      reviews: 63,
    },
    {
      id: 3,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 131,
    },
    {
      id: 3,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 131,
    },
    {
      id: 3,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 131,
    },
  ];
  return (
    <div>
      <div className="w-full bg-[#F5F6FA] min-h-screen p-[30px]">
        <h1 className="text-[32px] font-bold text-[#202224]">Favorites</h1>
        <div className="flex flex-wrap gap-8 justify-start mt-10 overflow-y-auto  max-h-[1024px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white w-[361px] shadow-lg p-4 rounded-xl hover:shadow-xl transition duration-300 relative"
            >
              <img
                src={im2}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded-md"
              />
              <h2 className="text-lg font-bold font-Nunito mt-3">
                {product.name}
              </h2>
              <p className="text-[#4880FF] text-base font-bold  font-Nunito">
                {product.price}
              </p>
              <div className="absolute left-4 top-32">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
                    fill="#E2EAF8"
                  />
                  <path
                    d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
                    fill="#626262"
                  />
                </svg>
              </div>
              <div className="absolute right-5 top-32 ">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                    fill="#E2EAF8"
                  />
                  <path
                    d="M17.3401 25.09L21.9201 20.5L17.3401 15.91L18.7501 14.5L24.7501 20.5L18.7501 26.5L17.3401 25.09Z"
                    fill="#626262"
                  />
                </svg>
                <div className="absolute right-0 top-[155px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44Z"
                      fill="#F9F9F9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.0002 29.883L29.1912 22.383C30.4874 21.0879 30.8086 19.1083 29.9885 17.4697V17.4697C29.3767 16.2467 28.2144 15.3921 26.8645 15.1731C25.5146 14.9541 24.1418 15.3973 23.1747 16.3642L22.0002 17.538L20.8257 16.3642C19.8587 15.3973 18.4858 14.9541 17.1359 15.1731C15.786 15.3921 14.6237 16.2467 14.012 17.4697V17.4697C13.193 19.1076 13.5138 21.0857 14.8085 22.3807L22.0002 29.883Z"
                      stroke="#F93C65"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2">
                {"⭐".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
                <span className="ml-2 text-gray-500 text-sm">
                  ({product.reviews})
                </span>
              </div>

              {/* Button */}
              <button className="mt-4  bg-[#E2EAF8]  font-Nunito  font-bold text-[#202224] py-2   px-6 rounded-xl ">
                Edit Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
