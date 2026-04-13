import Facility from "./Facility";
import { useState, useEffect } from "react";
const CategoryList = ({
  facilities = [],
  priceChange = 0,
  minPrice = 0,
  maxPrice = Number.MAX_SAFE_INTEGER,

  onRate = (f) => f,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  onMaintenanceChange = (f) => f,
  onDateChange = (f) => f,
  onEditBtn = (f) => f,
  onDemolish = (f) => f,
}) => {
  const rollerCoasters= facilities.filter((facility) => facility.category === "Roller Coaster")
  const gentleRides = facilities.filter((facility) => facility.category === "Gentle Ride")
  const thrillRides = facilities.filter((facility) => facility.category === "Thrill Ride")
  const waterRides = facilities.filter((facility) => facility.category === "Water Ride")
  const foodStalls = facilities.filter((facility) => facility.category === "Food Stall")

  return (
    <div>
      <div className="facilityList">
        <h2>Showing {rollerCoasters.length} Roller Coasters</h2>
        <div className="facilityContainer">
          {rollerCoasters.map((facility) => (
            <Facility
              key={facility._id}
              facility={facility}
              priceChange={priceChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onRate={onRate}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
              onMaintenanceChange={onMaintenanceChange}
              onDateChange={onDateChange}
              onEditBtn={onEditBtn}
              onDemolish={onDemolish}
            />
          ))}
        </div>
      </div>
      <div className="facilityList">
        <h2>Showing {gentleRides.length} Gentle Rides</h2>
        <div className="facilityContainer">
          {gentleRides.map((facility) => (
            <Facility
              key={facility._id}
              facility={facility}
              priceChange={priceChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onRate={onRate}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
              onMaintenanceChange={onMaintenanceChange}
              onDateChange={onDateChange}
              onEditBtn={onEditBtn}
              onDemolish={onDemolish}
            />
          ))}
        </div>
      </div>
      <div className="facilityList">
        <h2>Showing {thrillRides.length} Thrill Rides</h2>
        <div className="facilityContainer">
          {thrillRides.map((facility) => (
            <Facility
              key={facility._id}
              facility={facility}
              priceChange={priceChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onRate={onRate}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
              onMaintenanceChange={onMaintenanceChange}
              onDateChange={onDateChange}
              onEditBtn={onEditBtn}
              onDemolish={onDemolish}
            />
          ))}
        </div>
      </div>
      <div className="facilityList">
        <h2>Showing {waterRides.length} Water Rides</h2>
        <div className="facilityContainer">
          {waterRides.map((facility) => (
            <Facility
              key={facility._id}
              facility={facility}
              priceChange={priceChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onRate={onRate}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
              onMaintenanceChange={onMaintenanceChange}
              onDateChange={onDateChange}
              onEditBtn={onEditBtn}
              onDemolish={onDemolish}
            />
          ))}
        </div>
      </div>
      <div className="facilityList">
        <h2>Showing {foodStalls.length} Food Stalls</h2>
        <div className="facilityContainer">
          {foodStalls.map((facility) => (
            <Facility
              key={facility._id}
              facility={facility}
              priceChange={priceChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onRate={onRate}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
              onMaintenanceChange={onMaintenanceChange}
              onDateChange={onDateChange}
              onEditBtn={onEditBtn}
              onDemolish={onDemolish}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
