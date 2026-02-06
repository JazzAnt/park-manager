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
 * - add form to add new facilities
 * - (optional) add option for user to upload image
 */
