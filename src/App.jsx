import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Park Management Site" subtitle="Manage Your Facilities Here"/>
      <Footer />
    </>
  );
}

export default App;
