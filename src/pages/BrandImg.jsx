import React from "react"

const BrandImg = () => {
  return (
    <div className="pt-36 md:pt-44 bg-[#2A6D6A]">
      {/* ✅ First Image Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="w-full md:w-[620px]">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/brandImg%20(4).jpeg"
            alt="Brand Image 1"
            className="w-full object-contain rounded-md shadow-lg"
          />
        </div>

        <div className="w-full md:w-[620px]">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/brandImg%20(3).jpeg"
            alt="Brand Image 2"
            className="w-full object-contain rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* ✅ Second Image Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="w-full md:w-[620px]">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/brandImg%20(2).jpeg"
            alt="Brand Image 3"
            className="w-full object-contain rounded-md shadow-lg"
          />
        </div>

        <div className="w-full md:w-[620px]">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/brandImg%20(1).jpeg"
            alt="Brand Image 4"
            className="w-full object-contain rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* ✅ Third Image Row */}
      <div className="py-10 md:py-16 bg-[#2A6D6A]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%209.42.19%20PM.jpeg"
              alt="Packaging Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%209.42.20%20PM.jpeg"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* ✅ Fourth Image Row */}
      <div className="py-10 md:py-16 bg-[#2A6D6A]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%209.42.20%20PM%20(1).jpeg"
              alt="Packaging Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%209.42.21%20PM.jpeg"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* ✅ Logo Section (white background only) */}
      <div className="flex items-center justify-center w-full h-[180px] bg-white">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Horse%20palfrey%201%20(1).png"
          alt="Logo"
          className="w-32 md:w-48"
        />
      </div>
    </div>
  )
}

export default BrandImg
