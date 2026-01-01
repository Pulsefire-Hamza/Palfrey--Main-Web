import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const products = [
{ id: 1, name: "Chaandni Raat", pricePKR: 35000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34%202.jpg" },
{ id: 11, name: "Phool", pricePKR: 12000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(3).JPG", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(4).JPG" },
{ id: 12, name: "Zaban", pricePKR: 25000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(4).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(3).jpg" },
]

const Formals = () => {
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

export default Formals;
