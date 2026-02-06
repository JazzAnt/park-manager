import { useState } from "react";
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
    imgSrc: "react.svg",
    product: "Product1",
    rating: 5,
    price: 10,
    minPrice: 5,
    maxPrice: 20,
    maintenance: false,
    maintenanceDate: "1970-01-01",
  },
  {
    id: 456,
    name: "FacilityName2",
    description: lorem,
    imgSrc: "react.svg",
    product: "Product2",
    rating: 4,
    price: 100,
    minPrice: 5,
    maxPrice: 200,
    maintenance: true,
    maintenanceDate: "2027-01-01",
  },
  {
    id: 789,
    name: "FacilityName3",
    description: lorem,
    imgSrc: "vite.svg",
    product: "Product3",
    rating: 3,
    price: 1000,
    minPrice: 5,
    maxPrice: 2000,
    maintenance: false,
    maintenanceDate: "1970-01-01",
  },
  {
    id: 101,
    name: "FacilityName4",
    description: lorem,
    imgSrc: "react.svg",
    product: "Product4",
    rating: 2,
    price: 10000,
    minPrice: 5,
    maxPrice: 20000,
    maintenance: true,
    maintenanceDate: "2026-03-03",
  },
  {
    id: 202,
    name: "FacilityName5",
    description: lorem,
    imgSrc: "vite.svg",
    product: "Product5",
    rating: 0,
    price: 10000,
    minPrice: 5,
    maxPrice: 20000,
    maintenance: true,
    maintenanceDate: "2026-05-01",
  },
];

function App() {
  const MAX_RATING = 5;
  const PRICE_CHANGE = 0.5;

  return (
    <>
      <Header
        title="Park Management Site"
        subtitle="Manage Your Facilities Here"
      />
      <FacilityList
        facilities={fakeJson}
        maxRating={MAX_RATING}
        priceChange={PRICE_CHANGE}
      />
      <Footer />
    </>
  );
}

export default App;

/**
 * TODO LIST
 * - Add functionality to all buttons on facility
 * - Fix styling (add css and remember to import it here)
 * - Move fake-json to a real json file
 * - add form to add new facilities
 * - (optional) add option for user to upload image
 */
