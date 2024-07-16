import React from "react";
import LandingPage from "./components/LandingPage";
import CryptoList from "./components/CryptoList";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <div id="main-content">
        <CryptoList />
      </div>
    </div>
  );
}

export default App;
