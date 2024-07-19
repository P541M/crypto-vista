import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import CryptoListPage from "./components/CryptoListPage";
import MobileViewMessage from "./components/MobileViewMessage";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isHandheldDevice =
      /android|ipad|iphone|ipod|windows phone|opera mini|iemobile/i.test(
        userAgent.toLowerCase()
      );
    setIsMobile(isHandheldDevice || window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileViewMessage />;
  }

  return (
    <div className="App">
      <LandingPage />
      <CryptoListPage />
    </div>
  );
}

export default App;
