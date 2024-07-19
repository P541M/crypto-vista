import React, { useState, useEffect } from "react";
import axios from "axios";
import Typing from "react-typing-effect";

const CryptoListPage = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        const topCryptos = response.data.data.slice(0, 3); // Limit to top 3 cryptos
        setCryptos(topCryptos);
      })
      .catch((error) => {
        console.error("Error fetching data from CoinCap API", error);
      });
  }, []);

  const blurbs = {
    bitcoin:
      "Bitcoin is the first and most popular cryptocurrency, created in 2009 by Satoshi Nakamoto. It operates on a decentralized network using blockchain technology to ensure secure and transparent transactions.",
    ethereum:
      "Ethereum is a decentralized platform that enables smart contracts and decentralized applications (DApps) to be built and run without any downtime, fraud, control, or interference from a third party.",
    tether:
      "Tether is a type of cryptocurrency known as a stablecoin. It aims to keep cryptocurrency valuations stable, as opposed to the wide fluctuations observed in the prices of other popular cryptocurrencies like Bitcoin and Ethereum.",
  };

  const fixedPositions = [
    { top: "10vh", left: "10vw" },
    { top: "20vh", left: "60vw" },
    { top: "55vh", left: "30vw" },
  ];

  return (
    <div className="relative min-h-screen bg-bg">
      {cryptos.map((crypto, index) => {
        const position = fixedPositions[index];
        return (
          <div
            key={crypto.id}
            className="absolute p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg"
            style={{ top: position.top, left: position.left }}
          >
            <div className="flex flex-col items-start space-y-4">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-text">
                {crypto.name} ({crypto.symbol.toUpperCase()})
              </h1>
              <p className="text-text text-2xl md:text-3xl lg:text-4xl tracking-wide">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </p>
              <p
                className={`text-xl md:text-2xl lg:text-3xl tracking-wide ${
                  parseFloat(crypto.changePercent24Hr) > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {parseFloat(crypto.changePercent24Hr) > 0 ? "+" : ""}
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </p>
              <div className="max-w-xs md:max-w-md lg:max-w-lg">
                <Typing
                  text={[blurbs[crypto.id]]}
                  speed={25}
                  eraseSpeed={0}
                  eraseDelay={1000000000} // Set a very large number to effectively prevent erasing
                  typingDelay={100}
                  displayTextRenderer={(text, i) => {
                    return (
                      <p className="text-base md:text-lg lg:text-xl leading-7 text-text tracking-widest">
                        {text}
                      </p>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-4 left-4 text-left text-text">
        <p className="text-lg tracking-wide">dengiseD</p>
        <p className="text-lg tracking-wider">yB</p>
        <p className="text-lg tracking-widest">razeal3</p>
        <p className="text-lg tracking-widest">4 N E D I V</p>
      </div>
    </div>
  );
};

export default CryptoListPage;
