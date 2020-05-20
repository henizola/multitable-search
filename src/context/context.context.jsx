import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("Adiss");
  const [region, setRegion] = useState("");
  const [subRegion, setSubregion] = useState("");

  return (
    <SearchContext.Provider
      value={{
        setCountry,
        setCapital,
        setRegion,
        setSubregion,
        country,
        capital,
        region,
        subRegion,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
