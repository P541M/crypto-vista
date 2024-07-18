import React from "react";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 id="title" className="text-text text-6xl fade-up-skew mb-5">
        CryptoVista
      </h1>
      <p id="slogan" className="text-primary text-2xl fade-up-skew mb-8">
        Your Gateway to the Crypto World
      </p>
      <footer className="absolute bottom-4 text-text fade-up">
        © 2023 CryptoVista
      </footer>
    </div>
  );
};

export default LandingPage;
