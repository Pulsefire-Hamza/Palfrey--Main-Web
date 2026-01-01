import React from 'react';

const Reviews = () => {
  return (
    <div className="w-full bg-[#2A6D6A] text-white">
      {/* Top Image Section */}
      <div className="relative w-full mb-10 md:mb-16 pt-24 md:pt-36">
        {/* Desktop Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rev%20(2).png"
          alt="Reviews Desktop"
          className="hidden md:block w-full h-[534px] object-cover mx-auto"
        />

        {/* Mobile Image */}
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rev%20(1).png"
          alt="Reviews Mobile"
          className="block md:hidden w-full h-[505px] object-cover object-center"
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-white">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[44px] font-medium mb-4 tracking-wide text-center"
            style={{ fontFamily: 'Blacker Display, serif' }}
          >
            Voices of Our Muse
          </h2>
        </div>
      </div>

      {/* Image Pair Section 2 */}
      <div className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ayes%20(1).png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ayes%20(2).png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
{/* Image Trio Section */}
<div className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {/* Image 1 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/triple%20(2).png"
          alt="Showcase Image 1"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/triple%20(1).png"
          alt="Showcase Image 2"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 3 (solo full width on mobile) */}
      <div className="col-span-2 lg:col-span-1 w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/triple%20(3).png"
          alt="Showcase Image 3"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  </div>
</div>

 {/* Image Pair Section 2 */}
      <div className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rebeiws%20part%202%20(2).png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rebeiws%20part%202%20(1).png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

{/* Image Trio Section */}
<div className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {/* Image 1 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs%20(1).png"
          alt="Showcase Image 1"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs%20(2).png"
          alt="Showcase Image 2"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 3 (solo full width on mobile) */}
      <div className="col-span-2 lg:col-span-1 w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1890.jpg"
          alt="Showcase Image 3"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  </div>
</div>



 {/* Image Pair Section 2 */}
      <div className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs%20(4).png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs%20(5).png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

{/* Image Trio Section */}
<div className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {/* Image 1 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs.png"
          alt="Showcase Image 1"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs%20(8).png"
          alt="Showcase Image 2"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 3 (solo full width on mobile) */}
      <div className="col-span-2 lg:col-span-1 w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revs%20(7).png"
          alt="Showcase Image 3"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  </div>
</div>

     
 {/* Image Pair Section 2 */}
      <div className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rer.png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/revss%20(1).png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>


{/* Image Trio Section */}
<div className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {/* Image 1 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(1).png"
          alt="Showcase Image 1"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(3).png"
          alt="Showcase Image 2"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 3 (solo full width on mobile) */}
      <div className="col-span-2 lg:col-span-1 w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(2).png"
          alt="Showcase Image 3"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  </div>
</div>


   
 {/* Image Pair Section 2 */}
      <div className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(4).png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(5).png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

{/* Image Trio Section */}
<div className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {/* Image 1 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(7).png"
          alt="Showcase Image 1"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rect%20(8).png"
          alt="Showcase Image 2"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Image 3 (solo full width on mobile) */}
      <div className="col-span-2 lg:col-span-1 w-full">
        <img
          src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1892.jpg"
          alt="Showcase Image 3"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  </div>
</div>

  
 {/* Image Pair Section 2 */}
      <div className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto px-6">
          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/last%20rev.png"
              alt="Packaging Image 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-[620px] md:h-[750px]">
            <img
              src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/last%20review.png"
              alt="Packaging Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>


      {/* Logo Section */}
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

export default Reviews;
