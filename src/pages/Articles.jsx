import React from 'react'
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="w-full">
      {/*
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-36">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(7).jpeg"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(7).jpeg"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Chhap Tilak
          </h2>
         

<Link to="/chhap-tilak">
  <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Explore More
  </button>
</Link>


        </div>
      </div>
*/}
      {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-14 lg:mb-16 pt-24 md:pt-36">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2026%20(2).png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2024%20(2).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
           Series of Safarnama
          </h2>
            <Link to="/safarnama">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
        </div>
      </div>


      {/* Text Section with <p> tags */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          A Journey in Elegance
        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
          A celebration of color, culture, and beauty.
        </p>
      </div>
      
      {/* Side-by-Side Images with Overlay */}
      <div className="bg-white text-black pb-11">
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2020%20(4).png"
              alt="Chandini Raat"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
                Chandini Raat
              </h2>
              <Link to="/chandini-raat">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2023%20(7).png"
              alt="Zaban"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
                Zaban
              </h2>
                <Link to="/zaban">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
            </div>
          </div>
          
        </div>
     
          
            
      {/*
<div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-10">
  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(2).jpeg"
    alt="Chaap Tilak Desktop"
    className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
  />

  <img
    src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(1).jpeg"
    alt="Chaap Tilak Mobile"
    className="block md:hidden w-full h-[505px] object-cover object-center"
  />

  <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
    <h2
      className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
      style={{ fontFamily: "Blacker Display, serif" }}
    >
      Begum e Bahar
    </h2>
  </div>
</div>
*/}

 {/*
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2026%20(2).png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2024%20(2).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
           Series of Safarnama
          </h2>
            <Link to="/safarnama">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
        </div>
      </div>
*/}
   {/* Text Section with <p> tags */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
A Tale Draped in Grace        </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
Timeless design, crafted with soul.        </p>
      </div>
      
       {/*
      <div className="bg-white text-black pb-11">
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(3).jpeg"
              alt="Chandini Raat"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
               Rangrez
              </h2>
<Link to="/rangrez">
  <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Explore More
  </button>
</Link>

            </div>
          </div>

          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(1).jpeg"
              alt="Zaban"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
               Viraas
              </h2>
            
<Link to="/viraas">
  <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Explore More
  </button>
</Link>

            </div>
          </div>
        </div>
</div>
 */}
     {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2027%20(1).png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2026%20(3).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

     
{/* Overlay Content */}
<div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
  <h2
    className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
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

       {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phoool.png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2028.png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
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

   {/* Text Section with <p> tags */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
Where Threads Tell Stories     </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
A tapestry of culture and craft.        </p>
      </div>
      
      {/* Side-by-Side Images with Overlay */}
      <div className="bg-white text-black pb-11">
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2028%20(1).png"
              alt="Chandini Raat"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
              Anchal
              </h2>
                <Link to="/anchal">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2029.png"
              alt="Zaban"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
               Anjaan
              </h2>
                   <Link to="/anjaan">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
            </div>
          </div>
        </div>
</div>


       {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2031%20(3).png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2030%20(1).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Dosti
          </h2>
              <Link to="/dosti">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
        </div>
      </div>



       {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2032.png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2032%20(1).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
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



   {/* Text Section with <p> tags */}
      <div className="text-center px-4 pb-20">
        <p
          className="font-[BlackerDisplay] text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
A Symphony of Style and Tradition     </p>
        <p
          className="font-[BlackerDisplay] text-[16px] md:text-[18px] lg:text-[20px] text-gray-700"
          style={{ fontFamily: "Blacker Display, serif" }}
        >
Blooming in every shade of joy.        </p>
      </div>
      
      {/* Side-by-Side Images with Overlay */}
      <div className="bg-white text-black pb-11">
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2033%20(1).png"
              alt="Chandini Raat"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
              Rang Laal
              </h2>
                 <Link to="/raang-lal">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full md:w-[580px] md:h-[580px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2034%20(1).png"
              alt="Zaban"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-black bg-opacity-20">
              <h2
                className="font-[BlackerDisplay] text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 text-center"
                style={{ fontFamily: "Blacker Display, serif" }}
              >
               Rang Safaid
              </h2>
               <Link to="/safaid">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
            </div>
          </div>
        </div>
</div>


       {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2035.png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2034%20(2).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
          Zard
          </h2>
            <Link to="/zard">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
        </div>
      </div>
       {/* Image Section */}
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(2).png"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(1).png"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
         Kalidar
          </h2>
               <Link to="/kalidar">
    <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Explore More
    </button>
  </Link>
        </div>
      </div>
{/*
      <div className="relative w-full mb-6 md:mb-12 lg:mb-14 pt-3 md:pt-3">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(11).jpeg"
          alt="Chaap Tilak Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(11).jpeg"
          alt="Chaap Tilak Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="font-[BlackerDisplay] text-[26px] md:text-[34px] lg:text-[42px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
           Sukoon
          </h2>
<Link to="/sukoon">
  <button className="border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Explore More
  </button>
</Link>

        </div>
      </div>
 */}
      </div>
    </div>
  )
}

export default Articles
