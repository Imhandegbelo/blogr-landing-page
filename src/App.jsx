import React from "react";
import "./App.css";
import HeroSection from "./layouts/HeroSection";
import AboutSection from "./layouts/AboutSection";
import FeatureSection from "./layouts/FeatureSection";
import ConnectSection from "./layouts/ConnectSection";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <ConnectSection />
      <AboutSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
