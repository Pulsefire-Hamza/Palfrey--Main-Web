import React from "react";
import { Link } from "react-router-dom";

const ThirdSec = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[600px] lg:h-[900px] mb-6 md:mb-14 lg:mb-16 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(2).jpeg"
        alt="Phool"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 bg-black/20 text-white">
        <h2
          className="text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Begum e Bahar
        </h2>
       {/*
<Link to="/begum-e-bahar">
  <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Explore More
  </button>
</Link>
*/}

      </div>
    </div>
  );
};

export default ThirdSec;
