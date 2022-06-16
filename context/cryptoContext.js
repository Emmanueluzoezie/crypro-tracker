import React, { createContext, useContext, useEffect, useState } from "react";

const CryptoState = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    switch(currency){
      case "INR":
        setSymbol("₹")
        break;
      case "USD":
        setSymbol("$")
        break;
      default:
        setSymbol("₦")
    }
  }, [currency]);

  return (
    <CryptoState.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CryptoState.Provider>
  );
};

export {CryptoContext, CryptoState};