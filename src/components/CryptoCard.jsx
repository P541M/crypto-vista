import React from "react";

const CryptoCard = ({ name, symbol, price, change, image }) => {
  return (
    <div className="bg-bgContrast shadow-md rounded p-4 flex items-center">
      <img src={image} alt={name} className="w-10 h-10 mr-4" />
      <div className="flex-1">
        <h2 className="text-primary text-xl font-semibold">
          {name} ({symbol.toUpperCase()})
        </h2>
        <p className="text-secondary">${price.toLocaleString()}</p>
      </div>
      <p
        className={`text-lg ${change > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change > 0 ? "+" : ""}
        {change}%
      </p>
    </div>
  );
};

export default CryptoCard;
