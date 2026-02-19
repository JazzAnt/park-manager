import { useState } from "react";
import { v4 } from "uuid";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/facilityForm.css";
import "./assets/styles/facility.css";

import data from "./assets/services/data.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FacilityList from "./components/FacilityList";
import AddFacilityForm from "./components/AddFacilityForm";

function getCurrentDate() {
  const now = new Date();
  //String().padStart(2,"0") makes sure that these are double digits
  //even if it's a single digit day/month
  //getMonth and getDay returns the month and day starting at index 0
  //(e.g. Jan = 0, Feb = 1, Mar = 2, etc) which is why they need + 1
  const year = String(now.getFullYear()).padStart(4, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDay() + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

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
      <div id="wrapper">
        <Routes>
          <Route
            path="/"
            element={
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
                onMaintenanceChange={(id) => {
                  const updated = facilities.map((facility) =>
                    facility.id === id
                      ? {
                          ...facility,
                          maintenance: !facility.maintenance, // This is a checkbox so it just flips the existing bool
                          maintenanceDate: getCurrentDate(),
                          // Date is reset so that if checkbox goes from false to true, date is set to
                          // current date as the default date. If it goes from true to false also set
                          // the date since it'll be hidden anyways so it's fine.
                        }
                      : facility,
                  );
                  setFacilities(updated);
                }}
                onDateChange={(id, date) => {
                  const updated = facilities.map((facility) =>
                    facility.id === id
                      ? { ...facility, maintenanceDate: date }
                      : facility,
                  );
                  setFacilities(updated);
                }}
                onDemolish={(id) => {
                  const updated = facilities.filter(
                    (facility) => facility.id !== id,
                  );
                  setFacilities(updated);
                }}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddFacilityForm
                addNewFacility={(
                  name,
                  description,
                  imgSrc,
                  imgCredit,
                  product,
                  price,
                  minPrice,
                  maxPrice,
                ) => {
                  const updated = [
                    ...facilities,
                    {
                      id: v4(),
                      name,
                      description,
                      imgSrc, //placeholder, replace with custom image adding if possible
                      imgCredit,
                      product,
                      rating: 0,
                      price,
                      minPrice,
                      maxPrice,
                      maintenance: false,
                      maintenanceDate: "1998-10-07",
                    },
                  ];
                  setFacilities(updated);
                }}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

/**
 * TODO LIST
 * - Fix styling (add css and remember to import it here)
 * - (optional) add option for user to upload image
 */
