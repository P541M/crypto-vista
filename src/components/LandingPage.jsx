import React from "react";
import Typing from "react-typing-effect";

const LandingPage = () => {
  return (
    <div className="text-text bg-bg h-screen flex flex-col justify-center relative">
      <div className="absolute top-8 right-8 max-w-lg tracking-wider">
        <Typing
          text={[
            "Cryptocurrency is a digital or virtual currency that uses cryptography for security, making it hard to counterfeit. Operating on decentralized networks based on blockchain technology, cryptocurrencies ensure secure, transparent transactions. Bitcoin, created in 2009 by Satoshi Nakamoto, was the first and remains the most popular cryptocurrency. They offer benefits like lower transaction costs and increased privacy but also face challenges like regulatory uncertainty, market volatility, and security risks. Beyond finance, cryptocurrencies are influencing sectors like supply chain management, healthcare, and digital identity verification.",
          ]}
          speed={15}
          eraseSpeed={0}
          eraseDelay={1000000000} // Set a very large number to effectively prevent erasing
          typingDelay={100}
          displayTextRenderer={(text, i) => {
            return <p className="text-4xl leading-7">{text}</p>;
          }}
        />
      </div>
      <div className="absolute top-20 left-20 text-left">
        <h1 id="title" className="font-bold text-9xl mb-5 tracking-tighter">
          CRYPTo EL1Te
        </h1>
        <p id="slogan" className="text-6xl mb-10 tracking-wide">
          Sh0wcasing TH3
        </p>
        <p id="slogan" className="text-6xl m-8 tracking-wide">
          T0P
        </p>
        <p id="slogan" className="text-6xl mb-8 tracking-wide">
          Crypt0currencies
        </p>
      </div>

      <div className="absolute bottom-4 left-4 text-left">
        <p className="text-lg tracking-wide">Designed</p>
        <p className="text-lg tracking-wider">By</p>
        <p className="text-lg tracking-widest">3leazar</p>
        <p className="text-lg tracking-widest">V I D E N 4</p>
      </div>

      <footer className="absolute bottom-4 right-4">© 2023 CRYPTo EL1Te</footer>
    </div>
  );
};

export default LandingPage;
