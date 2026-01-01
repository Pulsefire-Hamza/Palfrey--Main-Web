import React from "react";

const OurStorySection = () => {
  return (
    <div className="relative w-full pt-24 text-white">
      {/* Background Image Section */}
      <div className="relative w-full h-[610px] md:h-[1000px]">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2013%20(1).png"
          alt="Our Story"
          className="hidden md:block w-full h-full object-cover object-center"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rang%20(1).png"
          alt="Our Story Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4">
          <h1
            className="text-[26px] md:text-[34px] font-medium tracking-wide text-white"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Palfrey & Gulaabo
          </h1>

          <h2
            className="mt-4 text-[26px] md:text-[34px] font-medium tracking-wide text-white"
            style={{ fontFamily: "Blacker Display, serif" }}
          >
            Our Story
          </h2>
        </div>
      </div>

      {/* Story Text Section */}
      <div className="w-full bg-[#2A6D6A]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center font-[Inter] leading-relaxed text-white">
          <p className="text-[16px] md:text-[18px]">
            We’re two sisters who started Palfrey and Gulaabo in 2022, just two hearts full of dreams and a deep love for everything traditional, handmade, and desi.
            <br /><br />
            One of us is a designer from IVS, and has always been drawn to the timeless elegance of horses, those symbols of grace and royalty we grew up fascinated by. The other comes from the world of business (an IBA alumni), brings the rhythm of business and is a total romantic at heart, forever in love with the beauty of roses and all things naturally aesthetic. That’s how Palfrey and Gulaabo came to be: two very different souls, building something similar together.
            <br /><br />
            We created this brand because we missed the charm of old-school fashion. The gararas, shararas, angarkhas, and sarees our grandmothers wore weren’t just clothes — they were memories. Stories. Pieces of art. And somewhere along the way, they got lost in the noise of fast fashion. We wanted to bring them back. Slowly, thoughtfully, with heart.
          </p>
        </div>
      </div>

      {/* Side-by-Side Images */}
      <div className="bg-white text-black py-16">
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="w-full md:w-[542px] md:h-[720px] aspect-square">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%208.png"
              alt="Our Story Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
           <div className="w-full md:w-[620px] md:h-[720px]">
      <video
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/55b4334661914485833714a6cc1a5b7d.mov"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-md"
      ></video>
    </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full bg-[#2A6D6A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center font-[Inter]">
          <h2 className="text-[28px] md:text-[36px] font-semibold mb-6">
            Mission
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed">
            At Palfrey and Gulaabo, we believe in slow fashion, local hands, and timeless silhouettes. Every piece we create blends the old with the new, tradition with touchable beauty. We believe beauty lives in the details.
            <br /><br />
            This isn’t just a brand for us. It’s our love letter to heritage, to craftsmanship, to art that deserves to be remembered and re-worn.
          </p>
        </div>
      </div>
<div className="w-full m-0 p-0 overflow-hidden">
  <div className="relative w-full md:h-[700px]">

    {/* Desktop Image */}
    <img
      src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(3).jpeg"
      alt="Our Story Desktop"
      className="hidden md:block w-full h-full object-cover object-center"
    />

    {/* Mobile Image */}
    <img
      src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(3).jpeg"
      alt="Our Story Mobile"
      className="block md:hidden w-full h-auto object-contain object-center"
    />

    {/* Overlay Text */}
    <div className="absolute inset-0 flex items-end justify-center text-center px-4 pb-10">
      <h1
        className="text-[20px] md:text-[34px] font-medium tracking-wide text-white"
        style={{ fontFamily: "Blacker Display, serif" }}
      >
        “A sisters led small business which is rooted in culture and nostalgia.”
      </h1>
    </div>
  </div>


        {/* Side-by-Side Images */}
        <div className="bg-white text-black py-16">
          <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
            {/* Image 1 */}
               <div className="w-full md:w-[620px] md:h-[720px]">
      <video
        src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/c0dd00a8a93c47c2a1d4568b7a163a05.mov"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-md"
      ></video>
    </div>

            {/* Image 2 */}
            <div className="w-full md:w-[542px] md:h-[720px] aspect-square">
              <img
                src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(3).jpeg"
                alt="Our Story Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* First Impression */}
        <div className="w-full bg-[#2A6D6A] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center font-[Inter]">
            <h2 className="text-[28px] md:text-[36px] font-semibold mb-6">
              First Impression
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed">
              Thank you for walking this path with us. For supporting local, and for choosing pieces that mean something.
              <br />
              With all our love, <br />Palfrey & Gulaabo <br />🌸🐎
            </p>
          </div>
        </div>

{/* New Full Width Image Section After First Impression */}
<div className="w-full m-0 p-0 overflow-hidden">
  <div className="relative w-full md:h-[800px]">

    {/* Desktop Image */}
    <img
      src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2027.png"
      alt="After First Impression Desktop"
      className="hidden md:block w-full h-full object-cover object-center"
    />

    {/* Mobile Image */}
    <img
      src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Rectangle%2068.png"
      alt="After First Impression Mobile"
      className="block md:hidden w-full h-auto object-contain object-center"
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
    </div>
  );
};

export default OurStorySection;
