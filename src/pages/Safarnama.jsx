import React from "react";
import { useNavigate } from "react-router-dom";

const Safarnama = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/product/5");
  };

  return (
    <div className="w-full relative">

      {/* Floating SHOP NOW Button */}
      <button
        onClick={handleShopNow}
        className="fixed 
          bottom-6 right-4
          sm:bottom-8 sm:right-6
          md:bottom-8 md:right-8
          lg:bottom-10 lg:right-10
          text-white
          px-5 py-3 
          sm:px-6 sm:py-3.5
          md:px-8 md:py-4
          rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300 z-[100] group
          hover:scale-105"
        style={{ backgroundColor: "#2A6D6A" }}
      >
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
          <span
            className="font-[BlackerDisplay] text-xs sm:text-sm md:text-sm font-light tracking-[0.2em]"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            SHOP NOW
          </span>

          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </button>

      {/* Hero Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-32">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2021%20(5).png"
          alt="Safarnama Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2020%20(7).png"
          alt="Safarnama Mobile"
          className="block md:hidden w-full h-[505px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-end flex-col pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium tracking-wide"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Series of Safar Nama
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          From the series of Safar Nama
        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          A chapter of grace, written in fabric and flow.
        </p>
      </div>

      {/* Two Products Section */}
      <div className="bg-white py-12">
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-6">

          {/* Khoj */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2013%20(8).png"
              alt="Khoj"
              className="w-full h-[720px] object-cover rounded-md"
            />
            <h3
              className="mt-6 font-[BlackerDisplay] text-[30px]"
              style={{ fontFamily: "Blacker Display, serif" }}
            >
              Khoj
            </h3>
            <p
              className="mt-3 text-gray-700 text-center"
              style={{ fontFamily: "Blacker Display, serif" }}
            >
              Beautifully crafted pure cotton silk sarree with blue and white
              natural dyes block printed on it.
            </p>
          </div>

          {/* Ashiana */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2023%20(9).png"
              alt="Ashiana"
              className="w-full h-[720px] object-cover rounded-md"
            />
            <h3
              className="mt-6 font-[BlackerDisplay] text-[30px]"
              style={{ fontFamily: "Blacker Display, serif" }}
            >
              Ashiana
            </h3>
            <p
              className="mt-3 text-gray-700 text-center"
              style={{ fontFamily: "Blacker Display, serif" }}
            >
              Exquisitely crafted cotton silk sarree inspired by heritage
              craftsmanship of Sindh.
            </p>
          </div>

        </div>
      </div>

      {/* Full Width Image */}
      <div className="py-10">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2022%20(9).png"
          alt="Safarnama Look"
          className="hidden md:block w-[1280px] h-[534px] object-cover mx-auto"
        />

        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2023%20(10).png"
          alt="Safarnama Mobile Look"
          className="block md:hidden w-full h-[505px] object-cover"
        />
      </div>

      {/* Final Image Pair */}
      <div className="bg-white py-12">
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-6">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2024%20(11).png"
            className="w-full md:w-1/2 h-[720px] object-cover rounded-md"
            alt="Detail 1"
          />
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2025%20(2).png"
            className="w-full md:w-1/2 h-[720px] object-cover rounded-md"
            alt="Detail 2"
          />
        </div>
      </div>

    </div>
  );
};

export default Safarnama;
