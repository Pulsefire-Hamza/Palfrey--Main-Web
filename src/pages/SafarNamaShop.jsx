import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 5, name: "Ashiana", category: "Saree", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(5).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(4).jpg" },
  { id: 6, name: "Khoj", category: "Saree", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0287.jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0285.jpg" },
  { id: 7, name: "Raastay", category: "Saree", pricePKR: 15000, sold: false, image1: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(2).jpg", image2: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(1).jpg" },
];

const SafarNamaShop = () => {
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [conversionRate, setConversionRate] = useState(1);
  const [currencySymbol, setCurrencySymbol] = useState("PKR");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const rates = {
    Pakistan: { rate: 1, symbol: "PKR" },
    "United Kingdom": { rate: 0.0031, symbol: "£" },
    "United States": { rate: 0.0056, symbol: "$" },
    "United Arab Emirates": { rate: 0.020, symbol: "AED" },
    Global: { rate: 0.0056, symbol: "$" },
  };

  useEffect(() => {
    const country = localStorage.getItem("selectedCountry") || "Pakistan";
    const validRate = rates[country] || rates["Pakistan"];
    setSelectedCountry(country);
    setConversionRate(validRate.rate);
    setCurrencySymbol(validRate.symbol);
  }, []);

  const categories = ["All", "Saree"];
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12 bg-white pt-32 md:pt-44">
      
      {/* Category Filter */}
      <div className="flex gap-4 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
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

            {/* Product Name */}
            <h3 className="mt-3 font-medium text-gray-900 text-[16px]">{product.name}</h3>

            {/* Price */}
            <p className="text-gray-600 text-[14px]">
              {currencySymbol}{" "}
              {(product.pricePKR * conversionRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SafarNamaShop;
