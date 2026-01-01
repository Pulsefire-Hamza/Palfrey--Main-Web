import React from "react";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 px-4 md:px-10">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-[550px] md:h-[850px] rounded-md overflow-hidden">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/silk%20(4).png"
          alt="phool-silk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 bg-black bg-opacity-20 text-white">
          <h2
            className="font-[BlackerDisplay] text-[32px] md:text-[36px] font-medium mb-6 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Phool Silk
          </h2>
       
<Link to="/phool-silk">
  <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Explore More
  </button>
</Link>


        </div>
      </div>

      {/* Right Video */}
      <div className="relative w-full md:w-1/2 h-[550px] md:h-[850px] rounded-md overflow-hidden">
        <video
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/f87e0a8c-c13f-4c5a-9dec-5f57c2ab8746.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 bg-black bg-opacity-20 text-white">
          <h2
            className="font-[BlackerDisplay] text-[32px] md:text-[36px] font-medium mb-6 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Chandni Raat
          </h2>
          <Link to="/chandini-raat">
            <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
