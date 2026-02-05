import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Facility from "./components/Facility";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FacilityList from "./components/FacilityList";

let lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi ullam voluptatem accusantium officiis illo ducimus minima dolorum eum, recusandae incidunt iusto natus iste ut soluta ab at? Corporis, similique.";

const fakeJson = [
  {
    id: 123,
    name: "FacilityName1",
    description: lorem,
    imgSrc: reactLogo,
    product: "Product1",
    price: 10,
    minPrice: 5,
    maxPrice: 20,
  },
  {
    id: 456,
    name: "FacilityName2",
    description: lorem,
    imgSrc: reactLogo,
    product: "Product2",
    price: 100,
    minPrice: 5,
    maxPrice: 200,
  },
  {
    id: 789,
    name: "FacilityName3",
    description: lorem,
    imgSrc: reactLogo,
    product: "Product3",
    price: 1000,
    minPrice: 5,
    maxPrice: 2000,
  },
  {
    id: 101,
    name: "FacilityName4",
    description: lorem,
    imgSrc: reactLogo,
    product: "Product4",
    price: 10000,
    minPrice: 5,
    maxPrice: 20000,
  },
  {
    id: 202,
    name: "FacilityName5",
    description: lorem,
    imgSrc: reactLogo,
    product: "Product5",
    price: 10000,
    minPrice: 5,
    maxPrice: 20000,
  },
];

function App() {
  return (
    <>
      <Header
        title="Park Management Site"
        subtitle="Manage Your Facilities Here"
      />
      <FacilityList facilities={fakeJson}/>
      <Footer />
    </>
  );
}

export default App;

/**
 * TODO LIST
 */
