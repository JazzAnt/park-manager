import Facility from "./Facility";
const FacilityList = ({
  facilities = [],
  maxRating = 5,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
}) =>
  facilities.length === 0 ? (
    <h2>No Facility in the Database</h2>
  ) : (
    <>
      <h2>Showing {facilities.length} Facilities</h2>
      <div className="row">
        {facilities.map((facility) => (
          <Facility
            key={facility.id}
            {...facility}
            maxRating={maxRating}
            increasePrice={increasePrice}
            decreasePrice={decreasePrice}
            priceChange={priceChange}
          />
        ))}
      </div>
    </>
  );

export default FacilityList;
