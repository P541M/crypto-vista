import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-bg to-bgContrast h-screen flex flex-col items-center justify-center">
      <h1 id="title" className="text-text text-6xl fade-up-skew mb-5">
        CryptoElite
      </h1>
      <p id="slogan" className="text-primary text-2xl fade-up-skew mb-8">
        Showcasing the Premier Cryptocurrencies
      </p>
      <footer className="absolute bottom-4 text-text fade-up">
        © 2023 CryptoElite
      </footer>
    </div>
  );
};

export default LandingPage;
