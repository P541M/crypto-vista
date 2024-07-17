import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        setCryptos(response.data.data.slice(0, 10)); // Limit to top 10 cryptos
      })
      .catch((error) => {
        console.error("Error fetching data from CoinCap API", error);
      });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            name={crypto.name}
            symbol={crypto.symbol}
            price={parseFloat(crypto.priceUsd).toFixed(2)}
            change={parseFloat(crypto.changePercent24Hr).toFixed(2)}
            image={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
