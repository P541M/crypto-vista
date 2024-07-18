import React from "react";
import LandingPage from "./components/LandingPage";
import CryptoListPage from "./components/CryptoListPage";

function App() {
  return (
    <div className="App bg-gradient-to-r from-bg to-bgContrast min-h-screen">
      <LandingPage />
      <CryptoListPage />
    </div>
  );
}

export default App;
