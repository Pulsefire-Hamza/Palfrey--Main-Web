import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A6D6A] text-white font-inter px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Newsletter</h3>
          <p className="text-[16px] mb-4 text-gray-100 leading-relaxed">
            Sign up to our newsletter to receive exclusive offers
          </p>
          <form
            action="https://yournewsletterlink.com"
            method="post"
            target="_blank"
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white/50 rounded-md px-4 py-3 placeholder-white/70 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#2A6D6A] font-semibold text-[15px] px-6 py-2.5 rounded-md hover:bg-gray-100 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Info</h3>
          <ul className="space-y-2 text-[16px]">
            <li>
              <a href="/our-story" className="hover:underline hover:text-gray-200">
                Our Story
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline hover:text-gray-200">
                Privacy Policy
              </a>
            </li>
            
             <li>
              <a href="/brand-img" className="hover:underline hover:text-gray-200">
                Brand Image
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-[16px]">
            <li>
              <a href="/refund-exchange" className="hover:underline hover:text-gray-200">
                Refund & Exchange Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline hover:text-gray-200">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/feedback-form" className="hover:underline hover:text-gray-200">
                Feedback Form
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Social</h3>

          {/* WhatsApp */}
          <p className="text-[16px] mb-4">
            <a
              href="https://wa.me/+923323909098"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-200 flex items-center gap-2"
            >
              <FaWhatsapp className="text-[20px]" /> +92 332 3909098
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[22px]">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100083728044872&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2A6D6A] hover:bg-gray-200 transition"
            >
              <FaFacebookF />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/palfreyandgulaabo?igsh=MWZyOGMwNzl4YTZocw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2A6D6A] hover:bg-gray-200 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-[15px] text-gray-100">
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <span>© 2025 - Palfrey & Gulaabo</span>
        </div>
        <div>
          Website developed by{" "}
          <a
            href="https://www.instagram.com/devrexdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-gray-200"
          >
            Devrex Digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
