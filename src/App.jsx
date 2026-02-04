import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Facility from "./components/Facility";
import Header from "./components/Header";
import Footer from "./components/Footer";

let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi ullam voluptatem accusantium officiis illo ducimus minima dolorum eum, recusandae incidunt iusto natus iste ut soluta ab at? Corporis, similique."

function App() {
  const [testPrice, setPrice] = useState(10.0)
  const priceChange = 0.5
  const maxPrice = 20
  const minPrice = 5
  return (
    <>
      <Header title="Park Management Site" subtitle="Manage Your Facilities Here"/>
      <Facility 
      name="Hello world!" 
      description={lorem} 
      imgSrc={reactLogo}
      product="Product"
      price={testPrice}
      increasePrice={() => {setPrice(testPrice + priceChange)}}
      decreasePrice={() => {setPrice(testPrice - priceChange)}}
      priceChange={priceChange}
      maxPrice={maxPrice}
      minPrice={minPrice}
      />
      <Footer />
    </>
  );
}

export default App;

/**
 * TODO LIST
 */
