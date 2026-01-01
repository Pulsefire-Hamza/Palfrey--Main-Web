import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

// Make sure this is in your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">

const FeedbackForm = () => {
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

return (
<div className="min-h-screen flex justify-center px-4 py-28 md:py-36 bg-white">
<div className="max-w-2xl w-full text-center">
{/* Image Section */}
<div className="flex justify-center mb-8">
<img
src="https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Mask%20group.png
" // replace with your own image URL
alt="Feedback"
className="w-20 h-20 object-contain md:w-28 md:h-28"
/>
</div>

    {/* Heading */}
    <h1
      className="text-3xl md:text-4xl font-black mb-4"
      style={{ fontFamily: 'Playfair Display, serif' }}
    >
      Customer Feedback Form
    </h1>

    <p
      className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed"
      style={{ fontFamily: 'Playfair Display, serif' }}
    >
      Thank you for sharing your feedback. We truly value your input and will carefully consider your comments.
    </p>

    {/* Recommend Question */}
    <div className="mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
      <p className="mb-2">Would you recommend it to your friends and colleagues?</p>
      <div className="flex justify-center gap-6">
        <label className="flex items-center gap-2">
          <input type="radio" name="recommend" className="accent-[#1f645d]" /> Yes
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="recommend" className="accent-[#1f645d]" /> No
        </label>
      </div>
    </div>

    {/* Rating Section */}
    <div className="mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
      <p className="mb-2">How satisfied are you with our product and service?</p>
      <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`h-8 w-8 cursor-pointer transition-all duration-150 ${
              (hover || rating) >= star ? 'text-[#1f645d]' : 'text-gray-300'
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
    </div>

    {/* Suggestions */}
    <div className="mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
      <p className="mb-2">Do you have suggestions on how we can serve you better?</p>
      <textarea
        rows="4"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1f645d]"
      ></textarea>
    </div>

    {/* Name and Email */}
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full md:w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1f645d]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full md:w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1f645d]"
      />
    </div>

    {/* Submit Button */}
    <button
      className="bg-[#1f645d] hover:bg-[#175147] text-white font-semibold py-3 px-8 rounded-md transition-all duration-200 w-full md:w-auto"
      style={{ fontFamily: 'Playfair Display, serif' }}
    >
      Submit Feedback
    </button>
  </div>
</div>


);
};

export default FeedbackForm;