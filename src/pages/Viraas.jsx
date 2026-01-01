import React from "react";

const Viraas = () => {
  return (
    <div className="w-full">
      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-32">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(2).jpeg"
          alt="Raastay Desktop"
          className="hidden md:block w-[1129px] h-[634px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(2).jpeg"
          alt="Raastay Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Viraas
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          Viraas
        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
An artisanal ensemble featuring a hand-embroidered halter top adorned with intricate threadwork in deep maroon and beige, paired with a flowy printed skirt that has ethnic tribal pattern of ajrak in neutral hues, moves with effortless grace. A perfect blend of earthy elegance and bohemian charm, crafted for the free-spirited muse who finds poetry in nature. 🌿        </p>
      </div>
       {/* Image Pair Section 1 */}
      <div className="bg-white text-black py-2 md:py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(4).jpeg"
              alt="Packaging Image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(5).jpeg"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        
          </div>
           {/* Image Section */}
     <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-8 md:pt-8">
  {/* Desktop Image */}
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(6).jpeg"
    alt="Raastay Desktop"
    className="hidden md:block w-[1280px] h-[634px] object-cover mx-auto"
  />

  {/* Mobile Image */}
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(6).jpeg"
    alt="Raastay Mobile"
    className="block md:hidden w-full h-[505px] object-cover object-center"
  />
</div>


          </div>
    </div>
     
  );
};

export default Viraas;
