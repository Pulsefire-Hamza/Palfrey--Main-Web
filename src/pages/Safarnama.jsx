import React from "react";

const  Safarnama = () => {
  return (
    <div className="w-full">
      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-32">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2021%20(5).png"
          alt="Raastay Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2020%20(7).png"
          alt="Raastay Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
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
A chapter of grace, written in fabric and flow.       </p>
      </div>
      {/* Image Pair Section 1 */}
<div className="bg-white text-black py-2 md:py-12">
  <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 max-w-7xl mx-auto px-6">
    
    {/* Left Image + Text */}
    <div className="w-full md:w-[620px] md:h-auto flex flex-col items-center">
      <img
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2013%20(8).png"
        alt="Khog"
        className="w-full h-[720px] object-cover rounded-md"
      />
      <div className="text-center mt-6">
        <p
          className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[40px] font-medium mb-3"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
         Khoj
        </p>
        <p
          className="font-[BlackerDisplay] text-[15px] md:text-[17px] lg:text-[18px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
Beautifully crafted pure cotton silk sarree with blue and white natural dyes block printed on it, paired with an off-white pure cotton silk blouse with complimenting enhancements. Delivering to your door steps right from a small village/town of Sindh.        </p>
      </div>
    </div>

    {/* Right Image + Text */}
    <div className="w-full md:w-[620px] md:h-auto flex flex-col items-center">
      <img
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2023%20(9).png"
        alt="Ehaidn Gafsanah"
        className="w-full h-[720px] object-cover rounded-md"
      />
      <div className="text-center mt-6">
        <p
          className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[40px] font-medium mb-3"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Ashiana
        </p>
        <p
          className="font-[BlackerDisplay] text-[15px] md:text-[17px] lg:text-[18px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
Exquisitely crafted pure cotton silk sarree with maroon and green natural dyes block printed on it, paired with a maroon pure cotton silk blouse with complimenting enhancements. Delivering to your door steps right from a small village/town of Sindh to make you feel comfortable and joyous in your new step of life.        </p>
      </div>
    </div>

  </div>


           {/* Image Section */}
     <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-8 md:pt-8">
  {/* Desktop Image */}
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2022%20(9).png"
    alt="Raastay Desktop"
    className="hidden md:block w-[1280px] h-[534px] object-cover mx-auto"
  />

  {/* Mobile Image */}
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2023%20(10).png"
    alt="Raastay Mobile"
    className="block md:hidden w-full h-[505px] object-cover object-center"
  />
</div>

   {/* Image Pair Section 1 */}
      <div className="bg-white text-black py-2 md:py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2024%20(11).png"
              alt="Packaging Image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2025%20(2).png"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        
          </div>

          </div>

          </div>
    </div>
     
  );
};

export default Safarnama;
