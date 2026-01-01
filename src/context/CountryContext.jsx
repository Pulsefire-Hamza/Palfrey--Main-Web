import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const CountryContext = createContext();

// Custom hook to use the context
export const useCountry = () => useContext(CountryContext);

// Provider component
export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState(null);

  // Load country from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedCountry");
    if (saved) setCountry(saved);
  }, []);

  const changeCountry = (newCountry) => {
    setCountry(newCountry);
    localStorage.setItem("selectedCountry", newCountry);
  };

  const clearCountry = () => {
    setCountry(null);
    localStorage.removeItem("selectedCountry");
  };

  return (
    <CountryContext.Provider value={{ country, changeCountry, clearCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
