import { useState } from "react";
import "./App.css";

import data from "./assets/services/data.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FacilityList from "./components/FacilityList";

function App() {
  const [facilities, setFacilities] = useState(data);
  const MAX_RATING = 5;
  const PRICE_CHANGE = 0.25;

  return (
    <>
      <Header
        title="Park Management Site"
        subtitle="Manage Your Facilities Here"
      />
      <FacilityList
        facilities={facilities}
        maxRating={MAX_RATING}
        onRate={(id, rating) => {
          const updated = facilities.map((facility) =>
            facility.id === id ? { ...facility, rating } : facility,
          );
          setFacilities(updated);
        }}
        priceChange={PRICE_CHANGE}
        //Could just use the const PRICE_CHANGE as increaseBy/decreaseBy but made it an argument
        //just in case I change my mind and want to give each facility a different increment
        increasePrice={(id, price, increaseBy, maxPrice) => {
          const updated = facilities.map((facility) =>
            facility.id === id
              ? {
                  ...facility,
                  // If new price exceeds maxPrice then set it as maxPrice instead
                  price:
                    price + increaseBy > maxPrice
                      ? maxPrice
                      : price + increaseBy,
                }
              : facility,
          );
          setFacilities(updated);
        }}
        decreasePrice={(id, price, decreaseBy, minPrice) => {
          const updated = facilities.map((facility) =>
            facility.id === id
              ? {
                  ...facility,
                  // If new price s below minPrice then set it as minPrice instead
                  price:
                    price - decreaseBy < minPrice
                      ? minPrice
                      : price - decreaseBy,
                }
              : facility,
          );
          setFacilities(updated);
        }}
        onDemolish={(id) => {
          const updated = facilities.filter((facility) => facility.id !== id);
          setFacilities(updated);
        }}
      />
      <Footer />
    </>
  );
}

export default App;

/**
 * TODO LIST
 * - Add functionality to all buttons on facility:
 * -- Maintenance Scheduler
 * - Fix styling (add css and remember to import it here)
 * - add form to add new facilities
 * - (optional) add option for user to upload image
 */
