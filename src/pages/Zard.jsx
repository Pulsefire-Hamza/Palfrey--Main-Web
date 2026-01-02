import React from "react";
import { useNavigate } from "react-router-dom";

const Zard = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/product/14");
  };

  return (
    <div className="w-full">
      {/* Floating Shop Now Button (UNCHANGED DESIGN) */}
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
        style={{ position: 'fixed', backgroundColor: '#2A6D6A' }}
      >
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
          <span
            className="font-[BlackerDisplay] text-xs sm:text-sm md:text-sm font-light tracking-[0.2em] whitespace-nowrap"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            SHOP NOW
          </span>
          
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
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

      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-32">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zard%20(1).png"
          alt="Zard Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zard%20(2).png"
          alt="Zard Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Zard
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          A piece from the art of “Rang Zard”
        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Mustard Gold Dori Embellished Pure lawn Sari. Paired with cotton silk
          blouse.
        </p>
      </div>

      {/* Image Pair Section */}
      <div className="bg-white text-black py-2 md:py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zard%20(3).png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zard%20(4).png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-8">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zard%20(5).png"
            alt="Desktop"
            className="hidden md:block w-[1280px] h-[534px] object-cover mx-auto"
          />

          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zard%20(6).png"
            alt="Mobile"
            className="block md:hidden w-full h-[505px] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Zard;
