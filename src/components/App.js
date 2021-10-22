import "../styles/index.scss";
import Navbar from "./Navbar";
import { useState } from "react";
import HeroSection from "./HeroSection";

const App = () => {
  return (
    <>
      <main className="page-body">
          <Navbar />
          <HeroSection />
      </main>
    </>
  );
};

export default App;
