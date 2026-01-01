import React from "react";
import { useNavigate } from "react-router-dom";

const Anchal = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/product/8");
  };

  return (
    <div className="w-full">
      {/* Floating Side Button - Responsive Design */}
      <button
        onClick={handleShopNow}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black to-gray-800 text-white px-3 py-4 md:px-6 md:py-6 lg:px-8 lg:py-6 rounded-l-xl md:rounded-l-2xl shadow-2xl hover:shadow-black/50 transition-all duration-500 z-50 group overflow-hidden"
      >
        <div className="relative">
          {/* Animated Background Effect */}
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          {/* Button Content */}
          <div className="relative flex flex-col items-center gap-1 md:gap-2">
            <span
              className="font-[BlackerDisplay] text-xs md:text-lg lg:text-xl tracking-wider md:tracking-widest"
              style={{ fontFamily: "Blacker Display, serif" }}
            >
              SHOP
            </span>
            <div className="w-6 md:w-8 h-px bg-white"></div>
            <span
              className="font-[BlackerDisplay] text-xs md:text-lg lg:text-xl tracking-wider md:tracking-widest"
              style={{ fontFamily: "Blacker Display, serif" }}
            >
              NOW
            </span>
            
            {/* Arrow Icon */}
            <svg
              className="w-4 h-4 md:w-6 md:h-6 mt-1 md:mt-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-32">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/anchal%20(1).png"
          alt="Raastay Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/anchal%20(2).png"
          alt="Raastay Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Anchal
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Anchal
        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          White weaved saree - lightweight and has a sheer texture, with a glossy transparency, incised with stylised f depicting the shape of J, which symbolises love. Paired with a fresh red color Indian masuri blouse. The best combination of reds and whites.
        </p>
      </div>

      {/* Image Pair Section 1 */}
      <div className="bg-white text-black py-2 md:py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/anchal%20(4).png"
              alt="Packaging Image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/anchal%20(3).png"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-8 md:pt-8">
          {/* Desktop Image */}
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/anchal%20(6).png"
            alt="Raastay Desktop"
            className="hidden md:block w-[1280px] h-[534px] object-cover mx-auto"
          />

          {/* Mobile Image */}
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/anchal%20(5).png"
            alt="Raastay Mobile"
            className="block md:hidden w-full h-[505px] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Anchal;