import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountrySelector = () => {
  const navigate = useNavigate();
  const [countrySelected, setCountrySelected] = useState(null);
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCountry && savedCurrency) {
      setCountrySelected(savedCountry);
      setCurrency(savedCurrency);
    }
  }, []);

  const countryOptions = {
    Pakistan: "PKR",
    "United Kingdom": "GBP",
    "United States": "USD",
    "United Arab Emirates": "AED",
    Global: "USD",
  };

  const flags = {
    Pakistan: "https://flagcdn.com/w40/pk.png",
    "United Kingdom": "https://flagcdn.com/w40/gb.png",
    "United States": "https://flagcdn.com/w40/us.png",
    "United Arab Emirates": "https://flagcdn.com/w40/ae.png",
    Global:
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/global.png",
  };

  const handleSelect = (country) => {
    if (country !== "Pakistan") return; // Only Pakistan is selectable
    const currencyCode = countryOptions[country];
    localStorage.setItem("selectedCountry", country);
    localStorage.setItem("selectedCurrency", currencyCode);
    setCountrySelected(country);
    setCurrency(currencyCode);
    navigate("/home");
  };

  const changeCountry = () => {
    localStorage.removeItem("selectedCountry");
    localStorage.removeItem("selectedCurrency");
    setCountrySelected(null);
    setCurrency(null);
  };

  const bgImage =
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(8).jpeg";
  const logoUrl =
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/animated%20white%201.png";

  const CountryButton = ({ country, size = "text-base" }) => {
    const isAvailable = country === "Pakistan";
    return (
      <div className="relative flex justify-center">
        {!isAvailable && (
          <span className="absolute -top-2 right-0 text-[10px] font-semibold bg-green-600 text-white px-2 py-0.5 rounded-full z-10">
            Coming Soon
          </span>
        )}
        <button
          onClick={() => handleSelect(country)}
          className={`country-btn ${size} ${
            !isAvailable ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:text-white"
          }`}
        >
          <img
            src={flags[country]}
            alt={country}
            className={size === "text-sm" ? "w-5 h-3" : "w-6 h-4"}
          />
          {country} ({countryOptions[country]})
        </button>
      </div>
    );
  };

  const renderCountryList = (size) =>
    Object.keys(flags).map((country) => <CountryButton key={country} country={country} size={size} />);

  return (
    <div
      className="relative flex flex-col items-center justify-end min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-12"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:hidden z-20">
        <img src={logoUrl} alt="Logo" className="w-24 h-auto" />
      </div>

      {/* Desktop Section */}
      <div className="hidden md:flex flex-col items-end absolute bottom-8 right-10">
        <div className="mb-10 z-10">
          <img src={logoUrl} alt="Logo" className="w-48 h-auto" />
        </div>

        <div
          className="bg-[#D9D9D9]/95 backdrop-blur-sm shadow-xl p-6 w-full max-w-[340px] text-center border border-gray-300"
          style={{ borderRadius: "50px 50px 20px 20px" }}
        >
          {!countrySelected ? (
            <>
              <h1 className="text-xl font-semibold mb-4 text-[#2A6D6A] border-b border-gray-400 pb-2">
                Select Your Country
              </h1>
              <div className="flex flex-col gap-3">{renderCountryList("text-base")}</div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-medium mb-4 text-[#2A6D6A]">
                Your current country: {countrySelected} ({currency})
              </h2>
              <button
                onClick={changeCountry}
                className="px-4 py-2 bg-[#2A6D6A] text-white rounded-lg hover:bg-green-700 text-base"
              >
                Change Country
              </button>
            </>
          )}
          <p className="text-xs text-gray-700 mt-5 italic">
            You can change your country later in settings.
          </p>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden w-full flex justify-center mb-8">
        <div
          className="bg-[#D9D9D9]/95 backdrop-blur-sm shadow-xl p-3 w-[90%] max-w-[280px] text-center border border-gray-300"
          style={{ borderRadius: "50px 50px 20px 20px" }}
        >
          {!countrySelected ? (
            <>
              <h1 className="text-lg font-semibold mb-3 text-[#2A6D6A] border-b border-gray-400 pb-1">
                Select Your Country
              </h1>
              <div className="flex flex-col gap-2">{renderCountryList("text-sm")}</div>
            </>
          ) : (
            <>
              <h2 className="text-sm font-medium mb-3 text-[#2A6D6A]">
                Your current country: {countrySelected} ({currency})
              </h2>
              <button
                onClick={changeCountry}
                className="px-3 py-2 bg-[#2A6D6A] text-white rounded-lg hover:bg-green-700 text-sm"
              >
                Change Country
              </button>
            </>
          )}
          <p className="text-[10px] text-gray-700 mt-3 italic">
            You can change your country later in settings.
          </p>
        </div>
      </div>

      <style>{`
        .country-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 12px;
          transition: 0.3s;
          background: transparent;
          border: 1px solid #2A6D6A;
          color: #2A6D6A;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};

export default CountrySelector;
