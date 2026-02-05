import Facility from "./Facility";
const FacilityList = ({
  facilities = [],
  maxRating = 5,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
}) => (
  facilities.length===0 ? 
  <h2>No Facility in the Database</h2> : <>
    <h2>Showing {facilities.length} Facilities</h2>
    <div className="row">
      {facilities.map((facility) => (
        <Facility
          name={facility.name}
          description={facility.description}
          imgSrc={facility.imgSrc}
          product={facility.product}
          rating={facility.rating}
          maxRating={maxRating}
          price={facility.price}
          maxPrice={facility.maxPrice}
          minPrice={facility.minPrice}
          increasePrice={increasePrice}
          decreasePrice={decreasePrice}
          priceChange={priceChange}
          maintenance={facility.maintenance}
          maintenanceDate={facility.maintenanceDate}
        />
      ))}
    </div>
  </>
);

export default FacilityList;
