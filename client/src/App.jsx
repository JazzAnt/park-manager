import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/facilityForm.css";
import "./assets/styles/facility.css";
import "./assets/styles/navbar.css";
import "./assets/styles/metrics.css";

import data from "./assets/services/data.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FacilityList from "./components/FacilityList";
import AddFacilityForm from "./components/AddFacilityForm";
import EditFacilityForm from "./components/EditFacilityForm";
import Metrics from "./components/Metrics";

import { pixabay_apikey } from "./apikeys.jsx";
/**
 * Fetches an image from pixabay API to be used as placeholder image.
 * Returns an updated facility with an image link.
 * @param {*} facility
 */
const appendImage = async (facility) => {
  const query = facility.name.replaceAll(" ", "+");
  const URL = `https://pixabay.com/api/?key=${pixabay_apikey}&q=${query}&image_type=photo`;
  let image = "https://picsum.photos/640/427";
  let imageSource = "Lorem Picsum";
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Pixabay Error:", response.statusText);
    const data = await response.json();
    if (!data.hits || data.hits.length === 0)
      throw new Error("Query yields no results");
    const imageData = data.hits[0];
    image = imageData.previewURL.replaceAll("_150", "_1280");
    imageSource = imageData.pageURL;
  } catch (err) {
    console.error(err.message);
  }
  const updatedFacility = { ...facility, image, imageSource };
  return updatedFacility;
};

const PRICE_CHANGE = 0.25;
const MIN_PRICE = 0;
const MAX_PRICE = 20;

function App() {
  const [facilities, setFacilities] = useState([]);
  const navigate = useNavigate();

  /********************************************************************
   * FETCH DATA FROM DB
   *******************************************************************/
  useEffect(() => {
    const fetchData = async () => {
      const URL = "http://localhost:5000/facilities";
      try {
        const response = await fetch(URL);
        if (!response.ok)
          throw new Error(
            `Error code ${response.status}:`,
            response.statusText,
          );
        const data = await response.json();
        setFacilities(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
    return () => {};
  }, []);
  /********************************************************************
   * ADD FACILITY
   *******************************************************************/
  const addNewFacility = async (facility) => {
    //Append image from API
    facility = await appendImage(facility);

    const URL = "http://localhost:5000/facilities";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(facility),
      });
      if (!response.ok)
        throw new Error(`Error code ${response.status}`, response.statusText);

      //Update local facilities
      const data = await response.json();
      const updated = [...facilities, data];
      setFacilities(updated);
    } catch (err) {
      console.error("Error in adding facility", err.message);
    }
  };
  /********************************************************************
   * EDIT FACILITY FORM FACILITY
   *******************************************************************/
  const onEditBtn = (id) => {
    navigate(`/edit/${id}`);
  };
  const editFacility = async (id, facility, imageChanged) => {
    // Only update image if detect image change
    if (imageChanged) {
      facility = await appendImage(facility);
    }

    const URL = `http://localhost:5000/facilities/${id}`;
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(facility),
      });
      if (!response.ok)
        throw new Error(`Error code ${response.status}`, response.statusText);

      //Update local facilities
      const data = await response.json();
      const updated = facilities.map((facility) =>
        facility._id === id ? data : facility,
      );
      setFacilities(updated);
    } catch (err) {
      console.error("Error in updating facility", err.message);
    }
  };
  /********************************************************************
   * DELETE FACILITY
   *******************************************************************/
  const onDemolish = async (id) => {
    const URL = `http://localhost:5000/facilities/${id}`;
    try {
      const response = await fetch(URL, { method: "DELETE" });
      if (!response.ok)
        throw new Error(`Error code ${response.status}`, response.statusText);

      //Update local facilities
      const updated = facilities.filter((facility) => facility._id !== id);
      setFacilities(updated);
    } catch (err) {
      console.error("Error in deleting facility", err.message);
    }
  };
  /********************************************************************
   * QUICK EDITS
   *******************************************************************/
  const onRate = (id, rating) => {
    const updated = facilities.map((facility) =>
      facility.id === id ? { ...facility, rating } : facility,
    );
    setFacilities(updated);
  };
  const increasePrice = (id, price, increaseBy, maxPrice) => {
    const updated = facilities.map((facility) =>
      facility.id === id
        ? {
            ...facility,
            // If new price exceeds maxPrice then set it as maxPrice instead
            price:
              price + increaseBy > maxPrice ? maxPrice : price + increaseBy,
          }
        : facility,
    );
    setFacilities(updated);
  };
  const decreasePrice = (id, price, decreaseBy, minPrice) => {
    const updated = facilities.map((facility) =>
      facility.id === id
        ? {
            ...facility,
            // If new price s below minPrice then set it as minPrice instead
            price:
              price - decreaseBy < minPrice ? minPrice : price - decreaseBy,
          }
        : facility,
    );
    setFacilities(updated);
  };
  const onMaintenanceChange = (id) => {
    const updated = facilities.map((facility) =>
      facility.id === id
        ? {
            ...facility,
            maintenance: !facility.maintenance, // This is a checkbox so it just flips the existing bool
            maintenanceDate: new Date().toISOString,
            // Date is reset so that if checkbox goes from false to true, date is set to
            // current date as the default date. If it goes from true to false also set
            // the date since it'll be hidden anyways so it's fine.
          }
        : facility,
    );
    setFacilities(updated);
  };
  const onDateChange = (id, date) => {
    const updated = facilities.map((facility) =>
      facility.id === id ? { ...facility, maintenanceDate: date } : facility,
    );
    setFacilities(updated);
  };

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
                priceChange={PRICE_CHANGE}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
                onRate={onRate}
                increasePrice={increasePrice}
                decreasePrice={decreasePrice}
                onMaintenanceChange={onMaintenanceChange}
                onDateChange={onDateChange}
                onEditBtn={onEditBtn}
                onDemolish={onDemolish}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddFacilityForm
                addNewFacility={addNewFacility}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditFacilityForm
                editFacility={editFacility}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
              />
            }
          />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

/**
 * TODO LIST
 * - (optional) add function for user to upload image
 */
