import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Facility from "./components/Facility";
import Header from "./components/Header";
import Footer from "./components/Footer";

let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi ullam voluptatem accusantium officiis illo ducimus minima dolorum eum, recusandae incidunt iusto natus iste ut soluta ab at? Corporis, similique."

function App() {
  return (
    <>
      <Header title="Park Management Site" subtitle="Manage Your Facilities Here"/>
      <Facility name="Hello world!" description={lorem} imgSrc={reactLogo}/>
      <Footer />
    </>
  );
}

export default App;
