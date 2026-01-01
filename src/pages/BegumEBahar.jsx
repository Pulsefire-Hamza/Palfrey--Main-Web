import React from "react";

const BegumEBahar = () => {
  return (
    <div className="w-full">
      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-36">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(2).jpeg"
          alt="Raastay Desktop"
          className="hidden md:block w-[1129px] h-[570px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(2).jpeg"
          alt="Raastay Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Begum e Bahar
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Begum e Bahar
        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
An artisanal ensemble featuring a black embroidered Mughal Begum halter top paired with a flowy shimmer skirt — earthy, free-spirited, and effortlessly artistic.       </p>
      </div>
       {/* Image Pair Section 1 */}
      <div className="bg-white text-black py-2 md:py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(3).jpeg"
              alt="Packaging Image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(1).jpeg"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        
          </div>
           {/* Image Section */}
     <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-8 md:pt-8">
  {/* Desktop Image */}
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(4).jpeg"
    alt="Raastay Desktop"
    className="hidden md:block w-[1280px] h-[634px] object-cover mx-auto"
  />

  {/* Mobile Image */}
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(4).jpeg"
    alt="Raastay Mobile"
    className="block md:hidden w-full h-[505px] object-cover object-center"
  />
</div>


          </div>
    </div>
     
  );
};

export default BegumEBahar;
