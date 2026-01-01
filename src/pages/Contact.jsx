import React from 'react';

// Add this in your index.html <head> for the display font
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-36 md:pt-48 px-4">
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-black text-black mb-6 text-center"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Contact Information
      </h1>

      {/* Contact Info */}
      <p className="text-lg text-gray-700 mb-8 text-center">
        Call/Whatsapp: +92 300 0000000
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-xl flex flex-col gap-4">
        {/* Name & Email side by side */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows="5"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
        ></textarea>

        {/* Send Message Button */}
        <button
          type="submit"
          className="bg-[#2A6D6A] text-white font-semibold py-3 rounded-lg hover:bg-[#245a54] transition mb-0"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
