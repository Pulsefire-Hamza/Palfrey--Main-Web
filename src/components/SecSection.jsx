import React from "react";
import { Link } from "react-router-dom";

const SecSection = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[600px] lg:h-[720px] mb-6 md:mb-14 lg:mb-16">
      {/* Background Image */}
      <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2027%20(1).png"
        alt="Raastay"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 bg-black bg-opacity-20 text-white">
        <h2
          className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium text-white mb-4 tracking-wide text-center"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Raastay
        </h2>
         <Link to="/raastay">
            <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore More
            </button>
          </Link>
      </div>
    </div>
  );
};

export default SecSection;
