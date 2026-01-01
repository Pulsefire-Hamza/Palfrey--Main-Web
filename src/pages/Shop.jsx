import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const products = [
  { id: 1, name: "Chaandni Raat", pricePKR: 35000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34%202.jpg" },
 { id: 5, name: "Ashiana", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(5).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(4).jpg" },
  { id: 6, name: "Khoj", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0287.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0285.jpg" },
  { id: 7, name: "Raastay", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(2).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(1).jpg" },
  { id: 8, name: "Anchal", pricePKR: 25000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(8).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(7).jpg" },
  { id: 9, name: "Anjaan", pricePKR: 25000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(1).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(6).jpg" },
  { id: 10, name: "Phool Silk", pricePKR: 25000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(6).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(5).jpg" },
  { id: 11, name: "Phool", pricePKR: 12000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(3).JPG", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(4).JPG" },
  { id: 12, name: "Zaban", pricePKR: 25000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(4).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(3).jpg" },
  { id: 13, name: "Rang Laal", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(5).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(4).jpg" },
  { id: 14, name: "Zard", pricePKR: 10000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(4).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(1).jpg" },
  { id: 15, name: "Rang Safaid", pricePKR: 20000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(5).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(4).jpg" },
  { id: 16, name: "Kalidar", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(3).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(2).jpg" },
  { id: 17, name: "Dosti", pricePKR: 30000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(1).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(5).jpg" },
  { id: 18, name: "Viraas", pricePKR: 25000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(2).jpeg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(4).jpeg" },
 { id: 20, name: "Chunri", pricePKR: 12000, sold: true, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/chunri%20(4).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/chunri%20(3).jpg" },
  { id: 21, name: "Sardiyo Ki Dhup", pricePKR: 20000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1704.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1703.jpg" },
  { id: 22, name: "Ishq Saree", pricePKR: 40000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1707.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1706.jpg" },
  { id: 23, name: "Ranj", pricePKR: 45000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1708.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1708.jpg" },
  { id: 24, name: "Ishq", pricePKR: 45000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%207(1).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57.jpg" },
  { id:  25, name: "Plain White Gharara", pricePKR: 8000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%208.04.42%20PM.jpeg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%208.04.42%20PM.jpeg" },

];

const Shop = () => {
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [conversionRate, setConversionRate] = useState(1);
  const [currencySymbol, setCurrencySymbol] = useState("PKR");

  // ✅ Match these keys exactly with CountrySelector
  const rates = {
    Pakistan: { rate: 1, symbol: "PKR" },
    "United Kingdom": { rate: 0.0031, symbol: "£" },
    "United States": { rate: 0.0056, symbol: "$" },
    "United Arab Emirates": { rate: 0.020, symbol: "AED" },
    Global: { rate: 0.0056, symbol: "$" },
  };

  useEffect(() => {
    const country = localStorage.getItem("selectedCountry") || "Pakistan";
    const validRate = rates[country] || rates["Pakistan"]; // ✅ safe fallback
    setSelectedCountry(country);
    setConversionRate(validRate.rate);
    setCurrencySymbol(validRate.symbol);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 bg-white pt-32 md:pt-44">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="block text-center group"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 shadow-sm transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2">
              <img
                src={product.image1}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-110"
              />
              <img
                src={product.image2}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-2 text-sm font-medium text-gray-900 tracking-wide uppercase transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  Quick View
                </div>
              </div>
            </div>

            <h3 className="mt-3 font-medium text-gray-900 text-[16px]">
              {product.name}
            </h3>

            <p className="text-gray-600 text-[14px]">
              {currencySymbol}{" "}
              {(product.pricePKR * conversionRate).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
