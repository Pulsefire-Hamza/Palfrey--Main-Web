import React from "react";

const RangSafaid = () => {
  return (
    <div className="w-full">
      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-32">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(11).jpeg"
          alt="Raastay Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(11).jpeg"
          alt="Raastay Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
           Sukoon
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
Sukoon        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
A contemporary kaftan ensemble offering both comfort and sophistication. The edges are accented with black block print borders, adding structure and contrast to the  drape. A pop of magenta lining peeks through from the inner layer, infusing vibrancy into the muted palette. Creates a perfect balance between bohemian refinement and understated modern grace — ideal for both travel and urban chic settings.    </p>
      </div>
       {/* Image Pair Section 1 */}
      <div className="bg-white text-black py-2 md:py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(9).jpeg"
              alt="Packaging Image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(10).jpeg"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        
          </div>
         

          </div>
    </div>
     
  );
};

export default RangSafaid;
