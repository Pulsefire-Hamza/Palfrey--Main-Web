import React from "react";
import { Link } from "react-router-dom";

const ForthSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 px-4 md:px-10">
      {/* Left Video */}
      <div className="relative w-full md:w-1/2 h-[700px] md:h-[900px] rounded-md overflow-hidden">
        <video
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/55b4334661914485833714a6cc1a5b7d.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-md"
        ></video>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 bg-black/20 text-white">
          <h2
            className="font-[BlackerDisplay] text-[32px] md:text-[36px] font-medium mb-6 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Phool
          </h2>
          <Link to="/phool">
            <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {/* Right Video */}
      <div className="relative w-full md:w-1/2 h-[700px] md:h-[900px] rounded-md overflow-hidden">
        <video
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/c0dd00a8a93c47c2a1d4568b7a163a05.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-md"
        ></video>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 bg-black/20 text-white">
          <h2
            className="font-[BlackerDisplay] text-[32px] md:text-[36px] font-medium mb-6 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Rangeen
          </h2>
          <Link to="/shop">
            <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;
