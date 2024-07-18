import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoListPage = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        setCryptos(response.data.data.slice(0, 3)); // Limit to top 3 cryptos
      })
      .catch((error) => {
        console.error("Error fetching data from CoinCap API", error);
      });
  }, []);

  const backgroundColors = {
    bitcoin: "bg-yellow-500",
    ethereum: "bg-gray-800",
    tether: "bg-green-500",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {cryptos.map((crypto, index) => (
        <div
          key={crypto.id}
          className={`flex-grow flex items-center justify-center ${
            backgroundColors[crypto.id] || "bg-bgContrast"
          }`}
          style={{ height: "33.33vh" }} // Each crypto section takes up one-third of the viewport height
        >
          <div className="flex flex-row items-center justify-between w-full max-w-4xl p-4">
            <img
              src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
              alt={crypto.name}
              className="w-32 h-32 mr-8"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-text text-6xl mb-4">
                {crypto.name} ({crypto.symbol.toUpperCase()})
              </h1>
              <p className="text-primary text-2xl mb-4">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </p>
              <p
                className={`text-lg ${
                  parseFloat(crypto.changePercent24Hr) > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {parseFloat(crypto.changePercent24Hr) > 0 ? "+" : ""}
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </p>
              <p className="text-secondary mt-4">
                {crypto.name} is one of the top cryptocurrencies in the market.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoListPage;
