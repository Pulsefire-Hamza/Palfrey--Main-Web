import React from 'react';

const Packaging = () => {
  return (
    <div className="w-full">
      {/* Top Image Section */}
      <div className="relative w-full mb-10 md:mb-16 pt-24 md:pt-36">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/pack%20(2).png"
          alt="Packaging Desktop"
          className="hidden md:block w-[1129px] h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/pack%20(1).png"
          alt="Packaging Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[44px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: 'Blacker Display, serif' }}
          >
            Packaging
          </h2>
        </div>
      </div>

      {/* Green Text Section */}
      <div className="w-full bg-[#2A6D6A] flex justify-center py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-2xl text-white text-left">
          <h2
            className="text-[22px] md:text-[26px] font-semibold mb-6 text-center"
            style={{ fontFamily: 'Blacker Display, serif' }}
          >
            Our Custom Packaging
          </h2>

          <p
            className="text-[16px] md:text-[18px] leading-relaxed space-y-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Let us take you through our personalised packaging process.
            <br /><br />
            It’s a five-step journey filled with thought and care:
            <br /><br />
            1. Sew a recycled jute bag.
            <br />
            2. Hand-paint our name on it.
            <br />
            3. Wrap the saree in soft tissue cloth before placing it into the bag.
            <br />
            4. Add a personalised note.
            <br />
            5. Tie the bag with a ribbon — and we’re good to go! 💙
          </p>
        </div>
      </div>

      {/* Image Pair Section 1 */}
      <div className="bg-white text-black py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
             {/* Right Side: Video */}
    <div className="w-full md:w-[620px] md:h-[720px]">
      <video
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ba7d7763c8e349108ebb65ff4020f760.mov"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-md"
      ></video>
    </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2023%20(3).png"
              alt="Packaging Image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Image Pair Section 2 */}
      <div className="bg-white text-black py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2026%20(4).png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[720px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2027%20(2).png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Final Single Centered Image Section */}
      <div className="bg-[#2A6D6A] flex justify-center py-12 md:py-20 px-4">
        <div className="w-full md:w-[900px] md:h-[700px]">
          <img
            src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2029%20(1).png"
            alt="Final Center Image"
            className="w-full h-full object-cover rounded-md mx-auto"
          />
        </div>
      </div>
        <div className="flex items-center justify-center w-full h-[180px] bg-white">
      <img
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Horse%20palfrey%201%20(1).png"
        alt="Logo"
        className="w-32 md:w-48"
      />
    </div>
    </div>
  );
};

export default Packaging;
